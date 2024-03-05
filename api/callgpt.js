// 导入需要的模块
import { post } from 'request';

// OpenAI API密钥
const apiKey = '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';

// 调用GPT API的函数
function callGPTAPI(prompt, callback) {
  console.log('Request Library:', request);

  // 设置API请求的URL
  const apiUrl = 'https://api.openai.com/v1/engines/davinci-codex/completions';

  // 设置请求头
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${apiKey}`
  };

  // 设置请求体
  const requestData = {
    prompt: prompt,
    max_tokens: 100
  };

  // 发送API请求
  post({
    url: apiUrl,
    headers: headers,
    json: requestData
  }, (error, response, body) => {
    if (error) {
      console.error('Error:', error);
      callback(error, null);
    } else {
      // 处理API响应
      const generatedText = body.choices[0].text;
      callback(null, generatedText);
    }
  });
}

export { callGPTAPI };

