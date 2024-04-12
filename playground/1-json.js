const fs = require('fs');
// const book = {
//     title: "Book name",
//     author: "John",
// }
// const JsonBook = JSON.stringify(book)
// console.log(JsonBook)
//
// const parseBook = JSON.parse(JsonBook)
// console.log(parseBook)

const getFileBufferData = fs.readFileSync("./test.json")
const getJsonData = getFileBufferData.toString()
const parseLoadData = JSON.parse(getJsonData)

parseLoadData.name = 'Sourav';
parseLoadData.age = 25;

const stringifyData = JSON.stringify(parseLoadData)
fs.writeFileSync("./test.json", stringifyData)

console.log(stringifyData)
