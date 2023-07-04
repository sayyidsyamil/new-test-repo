```javascript
let activeTabId;
let summaryData;

// Function to display the summarized text
function displaySummary() {
  const summaryContainer = document.getElementById('summaryContainer');
  summaryContainer.textContent = summaryData;
}

// Function to open the options page
function openOptions() {
  chrome.runtime.openOptionsPage();
}

// Event listener for the summarize button
document.getElementById('summaryButton').addEventListener('click', () => {
  chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
    activeTabId = tabs[0].id;
    chrome.tabs.sendMessage(activeTabId, {name: 'summarize'});
  });
});

// Event listener for the options button
document.getElementById('optionsButton').addEventListener('click', openOptions);

// Listener for messages from the content script
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.name === 'summaryResult') {
    summaryData = request.data;
    displaySummary();
  }
});
```