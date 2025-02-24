/** Here will come scripts which needs to be uploaded on the destination page */
console.log("Content script running...");


/**
 * This is a simple example of a content script that reads data (local and session storage) from the page and
 * sends it to the background script.
 */
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "getStorage") {
        sendResponse({
            data: {
                sessionStorage: sessionStorage,
                localStorage: localStorage
            }
        });
    }
});
