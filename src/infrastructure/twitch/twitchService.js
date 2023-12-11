import { sendTokenRequest } from "./twitchAuth";
import { getTokenFromStorage, storeTokeninStorage } from "../chrome/localStorage";

export const getToken = async () => {

    try {
        const token = await getTokenFromStorage();

        if (!token) {
            token = await sendTokenRequest();
            await storeTokeninStorage(token);
        }
        return token;
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


