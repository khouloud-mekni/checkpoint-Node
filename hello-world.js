
// TASK 1:
// console.log("HELLO WORLD")
// TASK 2:
// const http = require('http');
// const hostname = 'localhost';
// const port = 3000;
// const server =http.createServer((req,res)=>{
// res.statusCode=200;
// res.setHeader('Content-Type', 'text/html')
// res.end('<h1>Hello Node!!!!</h1>\n');
// })
// server.listen(port,hostname,()=>{
//     console.log(`Server running at http://${hostname}:${port}/`)
// })
//TASK 3:
const fs = require('fs');
// fs.writeFile('welcome.txt','Hello Node',(err)=>{
//     if (err) throw err;
//     console.log("File created successfully!")
// })
fs.readFile('hello.txt','utf8', (err, data) => {
    if (err) throw err;
    console.log(data) 
})



