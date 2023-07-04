```javascript
let summaryData = null;

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.message === 'summarize') {
    summarizeText(request.data);
  }
});

function summarizeText(data) {
  fetch(chrome.runtime.getURL('llm_api.js'))
    .then(response => response.text())
    .then(code => {
      let script = document.createElement('script');
      script.textContent = code;
      (document.head || document.documentElement).appendChild(script);
      script.remove();

      let xhr = new XMLHttpRequest();
      xhr.open('POST', 'https://chatgpt-api.shn.hk/v1/', true);
      xhr.setRequestHeader('Content-Type', 'application/json');
      xhr.send(JSON.stringify({
        "model": "gpt-3.5-turbo",
        "messages": [{"role": "user", "content": data}]
      }));

      xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
          summaryData = JSON.parse(xhr.responseText);
          chrome.runtime.sendMessage({message: 'summaryResult', data: summaryData});
        }
      }
    });
}
```