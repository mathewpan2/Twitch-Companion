import { v4 as uuidv4 } from "uuid";
import { launchWebAuthFlow } from "../chrome/identity";
import secrets from 'secrets';

const getAuthURL = (securityToken, promptVerify = false) => {
    let redirectUrl = chrome.identity.getRedirectURL();
    if (redirectUrl.slice(-1) === "/") {
        redirectUrl = redirectUrl.slice(0, -1);
    }

    return `${secrets.OAUTH_BASE_URL}/authorize?client_id=${secrets.CLIENT_ID}&redirect_uri=${secrets.redirectUrl}&response_type=${secrets.RESPONSE_TYPE_TOKEN}&force_verify=${promptVerify}&state=${securityToken}&scope=${secrets.SCOPES.join(
        "%20",
    )}`;
};

export const sendTokenRequest = (prompVerify = false) => {
    return new Promise((resolve, reject) => {
        const securityToken = uuidv4();

        const responseUrl = launchWebAuthFlow(
            getAuthURL(securityToken, prompVerify),
            prompVerify,
        );

        const url = new URL(responseUrl);
        const queryParams = new URLSearchParams(url.hash.substring(1));

        const token = queryParams.get("access_token");
        const state = queryParams.get("state");

        if (!token) {
            reject(Error("Error getting token from twitch API"));
        }

        if (state != securityToken) {
            reject(Error("The token wasn't requested by this extension"));
        }

        resolve(token);
    });
}