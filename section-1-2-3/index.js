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