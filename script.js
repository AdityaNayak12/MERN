const fs = require('fs')
//read
const data = fs.readFileSync('f1.txt')
console.log("file1 "+data)

//write
fs.writeFileSync("f2.txt", "I am f2 data")

//append
fs.appendFileSync("f2.txt"," please apend")

//delete
fs.unlinkSync('f2.txt')