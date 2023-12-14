
export const storeTokeninStorage = async (token) => {
    await chrome.storage.local.set({ "tc-token": token });

}

export const getTokenFromStorage = async () => {
    return await chrome.storage.local.get(["tc-token"]);
}

export const removeTokenFromStorage = async () => {
    return await chrome.storage.local.remove(["tc-token"]);
}
