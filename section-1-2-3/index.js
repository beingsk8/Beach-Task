/*Blocking code */
/*
const fs = require('node:fs');
const data = fs.readFileSync('/file.md'); // blocks here until file is read
*/

/*UnBlocking Code*/
/*
const fs = require('node:fs');
fs.readFile('/file.md', (err, data) => {
    if (err) throw err;
});*/

console.log("Hello World!");

const utils = require('./utils');
const fs = require('fs');
fs.writeFileSync('notes.txt', JSON.stringify({new:'new file and text added',value:'money'}))
fs.appendFileSync('notes.txt', JSON.stringify({value:'notes1'}))
console.log('new message',utils.name)
console.log(utils.sum(3,4))



/*---------Some Challenge Implements----------*/
//1. create a new File
//2. create getNotes Function that returns 'your notes'
//3. exports getNotes function
//4. From app.js load in and call the function printing message to console

console.log('new message',utils.getNotes())