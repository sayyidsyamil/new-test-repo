```javascript
const axios = require('axios');

async function summarizeText(text) {
  const response = await axios.post('https://chatgpt-api.shn.hk/v1/', {
    model: 'gpt-3.5-turbo',
    messages: [{
      role: 'user',
      content: text
    }]
  }, {
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.data && response.data.choices && response.data.choices.length > 0) {
    return response.data.choices[0].message.content;
  } else {
    throw new Error('Failed to summarize text');
  }
}

module.exports = {
  summarizeText
};
```