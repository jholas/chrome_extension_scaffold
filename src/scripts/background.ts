/** Scripts here be as a service worker */
console.log("Background script loaded");

/**
 * This is a simple example of a background script that listens for a click on the browser action.
 * When clicked, the script will execute a content script on the active tab.
 * The content script will read the storage data from the page and send it back to the background script.
 */
chrome.action.onClicked.addListener(async (tab) => {
    chrome.scripting.executeScript({
        target: { tabId: tab.id! },
        files: ["content.js"]
    });
});
