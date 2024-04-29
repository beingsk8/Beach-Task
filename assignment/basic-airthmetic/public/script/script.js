
 const calculateForm = document.querySelector("form");
const operationSelector = document.querySelector('select').value
 const number1 = document.getElementById('number1')
 const number2 = document.getElementById('number2')
 const messageText = document.querySelector('#message-1')
 const messageText2 = document.querySelector('#message-2')

 calculateForm.addEventListener("submit", (e) =>{
    e.preventDefault();
     messageText.textContent = 'calculating.........'
     messageText2.textContent = '';

  fetch(`http://localhost:3000/calculate?operation=${operationSelector}&num1=${number1.value}&num2=${number2.value}`).then((response) => {
   response.json().then((data) => {
    messageText.textContent = ''
    messageText2.textContent = data.response;
   })
  })
})