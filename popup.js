```javascript
let summary = '';

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('summarizeButton').addEventListener('click', summarizeText);
  chrome.runtime.sendMessage({type: 'loadOptions'}, (response) => {
    document.getElementById('optionsForm').value = response.userOptions;
  });
});

function summarizeText() {
  chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, {type: 'summarizeText'}, (response) => {
      if (response) {
        summary = response.summary;
        updateSummary();
      }
    });
  });
}

function updateSummary() {
  document.getElementById('summaryContainer').textContent = summary;
}
```