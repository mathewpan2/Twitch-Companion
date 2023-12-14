import { sendTokenRequest, validateToken } from "./twitchAuth";
import { getTokenFromStorage, storeTokeninStorage } from "../chrome/localStorage";
import { getTwitchFollowedStreams, getTwitchUser } from "./twitchRepository";


export const getToken = async () => {

    try {
        const tokenStorage = await getTokenFromStorage();
        if (Object.keys(tokenStorage).length === 0) {
            const token = await sendTokenRequest();
            await storeTokeninStorage(token);
            return token;
        }
        return tokenStorage;
    } catch (e) {
        console.log("Error getting token");
        throw e;
    }
}

export const refreshToken = async () => {
    const token = await sendTokenRequest();
    await storeTokeninStorage(token);
    return token;
}

export const getUser = async () => {
    return await validateToken();
}

export const getUserById = async ([userId]) => {
    const response = await getTwitchUser(userId);
    return response.data[0];

}

export const getFollowedStreams = async (userId, cursor, first) => {
    const streams = await getTwitchFollowedStreams(userId, cursor, first);


    const streamerInfo = streams.data.map(stream => ({
        channelName: stream.user_name,
        gameName: stream.game_name,
        viewerCount: stream.viewer_count,
        timeLive: stream.started_at,
    }));

    return streamerInfo;

}

