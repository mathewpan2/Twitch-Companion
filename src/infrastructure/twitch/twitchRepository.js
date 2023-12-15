import axios from "axios"
import { axiosInteceptor } from "../axios/axiosInterceptors"
import secrets from 'secrets';

let twitchApiInstance;

const getTwitchApiInstace = () => {
    if (!twitchApiInstance) {
        twitchApiInstance = axiosInteceptor(axios.create({
            headers: {
                ...({ "Client-Id": secrets.CLIENT_ID }),
            },
        }
        ));
    }
    return twitchApiInstance;
}

export const getTwitchFollowedStreams = async (userId, after = "", first = 20) => {
    const url = new URL(`${secrets.API_BASE_URL}/streams/followed?user_id=${userId}`);
    url.searchParams.append('first', first);
    if (after) {
        url.searchParams.append('after', after);
    }

    try {
        const response = await getTwitchApiInstace().get(url.href)

        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const getTwitchUsers = async (ids) => {

    try {

        const response = await getTwitchApiInstace().get(
            `${secrets.API_BASE_URL}/users?${ids.map((id) => `id=${id}`).join("&")}`
        );


        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }

    // ${login.map((login) => `&login=${login}`).join("")}

}


