import { v4 as uuidv4 } from "uuid";
import { launchWebAuthFlow } from "../chrome/identity";
import secrets from 'secrets';
import { axiosInteceptor } from "../axios/axiosInterceptors";
import axios from "axios";


let twitchAuthInstance;

const getTwitchAuthInstance = () => {
    if (!twitchAuthInstance) {
        twitchAuthInstance = axiosInteceptor(axios.create());
    }
    return twitchAuthInstance;
}


const getAuthURL = (securityToken, promptVerify = false) => {
    let redirectUrl = chrome.identity.getRedirectURL();
    if (redirectUrl.slice(-1) === "/") {
        redirectUrl = redirectUrl.slice(0, -1);
    }

    return `${secrets.OAUTH_BASE_URL}/authorize?client_id=${secrets.CLIENT_ID}&redirect_uri=${redirectUrl}&response_type=${secrets.RESPONSE_TYPE_TOKEN}&force_verify=${promptVerify}&state=${securityToken}&scope=${secrets.SCOPES.join(
        "%20",
    )}`;
};

export const sendTokenRequest = async (prompVerify = true) => {

    const securityToken = uuidv4();

    const responseUrl = await launchWebAuthFlow(
        getAuthURL(securityToken, prompVerify),
        prompVerify,
    );


    console.log(responseUrl);
    const url = new URL(responseUrl);
    const queryParams = new URLSearchParams(url.hash.substring(1));

    const token = queryParams.get("access_token");
    const state = queryParams.get("state");

    if (!token) {
        throw new (Error("Error getting token from twitch API"));
    }

    if (state != securityToken) {
        throw new (Error("The token wasn't requested by this extension"));
    }

    return token;
}

export const validateToken = async () => {

    try {
        const response = await getTwitchAuthInstance().get(`${secrets.OAUTH_BASE_URL}/validate`)

        return response.data.user_id;
    } catch (error) {
        console.error(error);
        throw error;
    }

    // try {
    //     const response = await axios.get(`${secrets.OAUTH_BASE_URL}/validate`,
    //         {
    //             headers: {
    //                 'Authorization': 'OAuth 9c90f5agbwr6c9cneux79xb20wn7g4'
    //             }
    //         });

    //     return response.data.user_id;
    // } catch (error) {
    //     console.error(error);
    //     throw error;
    // }
}