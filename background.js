chrome.runtime.onInstalled.addListener(() => {
  console.log("✅ Extension installed.");
});

// Optional future: example to send message to content script
chrome.tabs.onActivated.addListener((activeInfo) => {
  chrome.tabs.get(activeInfo.tabId, (tab) => {
    if (tab.url.includes("youtube.com")) {
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: () => {
          console.log("YouTube tab activated");
        }
      });
    }
  });
});
