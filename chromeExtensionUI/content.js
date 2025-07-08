// Content script - runs in webpage context and can access DOM
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'getText') {
    // Get text from webpage element
    const text = document.querySelector('.ql-editor p')?.innerText || '';
    console.log('Content script: Found text:', text);
    sendResponse({ text });
  } else if (request.action === 'setText') {
    // Set text in webpage element
    const element = document.querySelector('.ql-editor p');
    if (element) {
      element.innerText = request.text;
      console.log('Content script: Updated text to:', request.text);
      sendResponse({ success: true });
    } else {
      sendResponse({ success: false, error: 'Element not found' });
    }
  }
}); 