```javascript
let userOptions = {};

// Function to save user options
function saveOptions() {
  chrome.storage.sync.set(userOptions, function() {
    let status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

// Function to load user options
function loadOptions() {
  chrome.storage.sync.get(userOptions, function(items) {
    userOptions = items;
    document.getElementById('optionsForm').value = JSON.stringify(userOptions);
  });
}

// Event listener for form submission
document.getElementById('optionsForm').addEventListener('submit', function(e) {
  e.preventDefault();
  userOptions = JSON.parse(document.getElementById('optionsForm').value);
  saveOptions();
});

// Event listener for form reset
document.getElementById('optionsForm').addEventListener('reset', function(e) {
  userOptions = {};
  saveOptions();
});

// Load options when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', loadOptions);
```