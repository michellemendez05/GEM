function translateText() {
  let text = document.getElementById("paragraph1").innerHTML;
  let language = document.getElementById("languageSelect").value;
  let xhr = new XMLHttpRequest();
  let url = "https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=" + language + "&dt=t&q=" + encodeURI(text);
  xhr.open("GET", url, true);
  xhr.send();
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      let response = JSON.parse(xhr.responseText);
      let translation = response[0][0][0];
      document.getElementById("paragraph1").innerHTML = translation;
    }
  };
}
const messagesContainer = document.querySelector('.chatbot-messages');
const inputField = document.querySelector('.chatbot-input input');
const sendButton = document.querySelector('.chatbot-input button');

sendButton.addEventListener('click', () => {
  const userInput = inputField.value;
  if (userInput) {
    const botResponse = generateBotResponse(userInput);
    displayMessage(userInput, 'user');
    displayMessage(botResponse, 'bot');
    inputField.value = '';
  }
});

function generateBotResponse(userInput) {
 let botResponse;
  if (userInput.toLowerCase() === 'hello') {
    botResponse = 'Hi there!';
  } else if (userInput.toLowerCase() === 'hey') {
    botResponse = 'Hi there!';
  } else if (userInput.toLowerCase() === 'how are you?') {
    botResponse = 'I am doing well, thank you!';
  } else if (userInput.toLowerCase() === 'how can i start working') {
    botResponse = 'To start working, apply for a work permit by filling out form I-765 and submitting it to the USICS';
  } else if (userInput.toLowerCase() === 'how are you?') {
    botResponse = 'I am doing well, thank you!';
  } else if (userInput.toLowerCase() === 'where can I find food banks?') {
    botResponse = 'You can find food banks at 1-Miami Helping Hands - Food Distribution Center');
    botResponse ='You can also find them at Saint John Baptist Church');
  } else if (userInput.toLowerCase() === 'how are you?') {
    botResponse = 'I am doing well, thank you!';
  } else if (userInput.toLowerCase() === 'how are you?') {
    botResponse = 'I am doing well, thank you!';
  } else if (userInput.toLowerCase() === 'how are you?') {
    botResponse = 'I am doing well, thank you!';
  } else if (userInput.toLowerCase() === 'how are you?') {
    botResponse = 'I am doing well, thank you!';
  } else if (userInput.toLowerCase() === 'how are you?') {
    botResponse = 'I am doing well, thank you!';
  } else if (userInput.toLowerCase() === 'how are you?') {
    botResponse = 'I am doing well, thank you!';
  } else if (userInput.toLowerCase() === 'how are you?') {
    botResponse = 'I am doing well, thank you!';
  } else if (userInput.toLowerCase() === 'how are you?') {
    botResponse = 'I am doing well, thank you!';
  } else if (userInput.toLowerCase() === 'how are you?') {
    botResponse = 'I am doing well, thank you!';
  } 
  else {
    botResponse = "Sorry, I didn't understand that.";
  }
  return botResponse;
}


function displayMessage(message, sender) {
  const messageDiv = document.createElement('div');
  messageDiv.classList.add('message', sender);
  messageDiv.textContent = message;
  messagesContainer.appendChild(messageDiv);
}


