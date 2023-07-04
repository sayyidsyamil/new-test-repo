```javascript
document.addEventListener('DOMContentLoaded', function() {
    var optionsButton = document.getElementById('optionsButton');

    optionsButton.addEventListener('click', function() {
        openOptions();
    });
});

function openOptions() {
    chrome.runtime.openOptionsPage();
}
```