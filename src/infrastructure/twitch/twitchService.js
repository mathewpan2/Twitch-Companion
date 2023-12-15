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


export const getChannelProfilePics = async (userIds) => {

    const profiles = userIds.map(userId => getTwitchUser(userId));
    const responses = await Promise.all(profiles);

    const profilePics = responses.map(channel => channel.data[0].profile_image_url);

    return profilePics;
}

export const getFollowedStreams = async (userId, cursor, first) => {

    const streams = {
        data: [],
    }
    const temp = await getTwitchFollowedStreams(userId, cursor, first);
    streams.data.push(...temp.data)

    let after = '';

    if (temp.pagination) {
        after = temp.pagination.cursor;
    }

    const channelIds = temp.data.map(stream => stream.user_id);
    const profilePics = await getChannelProfilePics(channelIds);
    // while (after) {
    //     const extra = await getTwitchFollowedStreams(userId, after, first);
    //     streams.data.push(...extra.data)

    //     if (extra.pagination) {
    //         after = extra.pagination.cursor;
    //     }
    // }
    let num = 0
    const liveStreams = streams.data.map(stream => ({
        channelName: stream.user_name,
        gameName: stream.game_name,
        viewerCount: stream.viewer_count,
        timeLive: stream.started_at,
        channelIcon: profilePics[num++],
    }));
    return { liveStreams, after };
}

