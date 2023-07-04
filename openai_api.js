```javascript
const axios = require('axios');

const openaiApiKey = 'YOUR_OPENAI_API_KEY';

const getSummary = async (text) => {
  try {
    const response = await axios.post('https://api.openai.com/v1/engines/davinci-codex/completions', {
      prompt: text,
      max_tokens: 60
    }, {
      headers: {
        'Authorization': `Bearer ${openaiApiKey}`,
        'Content-Type': 'application/json'
      }
    });

    if (response.data.choices && response.data.choices.length > 0) {
      return response.data.choices[0].text.trim();
    } else {
      throw new Error('No summary generated');
    }
  } catch (error) {
    console.error(error);
    return null;
  }
};

module.exports = {
  getSummary
};
```