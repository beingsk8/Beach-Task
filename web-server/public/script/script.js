console.log('logged from script file')

const weatherForm = document.querySelector('form')
const searchText = document.querySelector('input')
const messageText = document.querySelector('#message-1')
const messageText2 = document.querySelector('#message-2')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('weather form submitted',searchText.value);
    messageText.textContent = 'Loading...'
    messageText2.textContent = ''
    fetch(`http://localhost:3000/weather?address=${searchText.value}`).then((response) => {
        response.json().then((data) => {
            if(data.error){
                messageText.textContent = data.error;
            }
            else {
                messageText.textContent = data.address;
                messageText2.textContent = `in this location temp is ${data.forecast.temperature} celsius and rain chance is ${data.forecast.rainChance}%\``;
            }
        })
    })
})
