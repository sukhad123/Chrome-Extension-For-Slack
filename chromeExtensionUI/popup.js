const result = document.getElementById('result');
const genzBtn = document.getElementById('genzBtn');
const proBtn = document.getElementById('proBtn');

async function sendText(style) {
  console.log('sendText function called with style:', style);
  
  try {
    console.log('Getting active tab...');
    // Get text from webpage via content script
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    console.log('Active tab:', tab);
    
    console.log('Sending message to content script...');
    const response = await chrome.tabs.sendMessage(tab.id, { action: 'getText' });
    console.log('Response from content script:', response);
    const text = response.text;
    
    console.log('Popup: Got text from webpage:', text);
    result.textContent = "Loading...";
  
    // Send to API
    const apiResponse = await fetch('https://googlechromeextension-node-js-backend-1.onrender.com/api', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text, style })
    });
    console.log('API response received:', apiResponse);
    const data = await apiResponse.json();
    
    console.log('Popup: Got API response:', data);
    
    // Update webpage with response via content script
    await chrome.tabs.sendMessage(tab.id, { 
      action: 'setText', 
      text: data.text 
    });
    
    result.textContent = "Updated webpage!";
  } catch (e) {
    console.error('Popup: Error:', e);
    result.textContent = "Error: " + e.message;
  }
}

console.log('Setting up button click handlers...');
genzBtn.onclick = () => {
  console.log('GenZ button clicked!');
  sendText('genz');
};
proBtn.onclick = () => {
  console.log('Professional button clicked!');
  sendText('professional');
};

console.log('Popup script loaded successfully'); 