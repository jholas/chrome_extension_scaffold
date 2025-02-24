
document.addEventListener("DOMContentLoaded", async function () {
    console.log("Popup script loaded");

    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    /**
     * Send a message to the content script to get the storage data.
     * The content script will read the storage data from the page and send it back to the popup script.
     */
    chrome.tabs.sendMessage(tab.id!, { action: "getStorage" }, (response) => {
        if (chrome.runtime.lastError) {
            console.error("Error:", chrome.runtime.lastError.message);
            document.getElementById("storageData")!.textContent = "Error: " + chrome.runtime.lastError.message;
            return;
        }

        if (response && response.data) {
            console.log("Data received:", response.data);
        } else {
            console.warn("No data received");
        }
    });
});
