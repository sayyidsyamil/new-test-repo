```javascript
import { getSummary } from './openai_api.js';

let userOptions = {};
let summary = '';

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ userOptions: { maxLength: 100 } });
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.message === 'summarizeText') {
    getSummary(request.text, userOptions.maxLength)
      .then(res => {
        summary = res;
        sendResponse({ summary });
      })
      .catch(err => console.error(err));
    return true;
  } else if (request.message === 'updateOptions') {
    userOptions = request.userOptions;
    chrome.storage.sync.set({ userOptions });
  }
});

chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ['content.js']
  });
});
```