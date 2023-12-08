export const launchWebAuthFlow = (url, interactive) => {
    return new Promise((resolve, reject) => {
        chrome.identity.launchWebAuthFlow(
            {
                url: url,
                interactive: interactive,
            },
            (responseUrl) => {
                if (chrome.runtime.lastError) {
                    reject(chrome.runtime.lastError);
                }
                resolve(responseUrl);
            }
        );
    });
}



