// 1.create the server

const http = require('http');

const server = http.createServer((req, res) => {
    // res.end('Hello from server');
    if(req.url==='/test'){
        console.log('Send Data')
    }
});

server.listen(3000, () => {
    console.log('Server running');
});

// // 2.file create and read
// const fs = require('fs');

// fs.writeFileSync('text.txt', 'Hello world');

// const data = fs.readFileSync('test.txt', 'utf-8');
// console.log(data)
