```javascript
chrome.runtime.onInstalled.addListener(() => {
  chrome.action.setBadgeBackgroundColor({ color: '#4688F1' });
});

let activeTabId = null;

chrome.tabs.onActivated.addListener((activeInfo) => {
  activeTabId = activeInfo.tabId;
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.message === 'summarize') {
    chrome.tabs.sendMessage(activeTabId, { message: 'summarize' });
  }
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.message === 'summaryResult') {
    chrome.tabs.sendMessage(activeTabId, { message: 'summaryResult', summaryData: request.summaryData });
  }
});
```