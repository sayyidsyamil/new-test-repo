```javascript
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.message === 'summarizeText') {
        let textToSummarize = document.body.innerText;
        chrome.runtime.sendMessage({
            message: 'summarizeText',
            data: textToSummarize
        });
    }
});
```