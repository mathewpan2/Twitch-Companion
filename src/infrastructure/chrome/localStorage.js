
export const storeTokeninStorage = async (token) => {
    await chrome.storage.local.set({ "tc-token": token });

}

export const getTokenFromStorage = async () => {
    return await chrome.storage.local.get(["tc-token"]);
}