// const http = require('http');
// const server = http.createServer((req, res) => {
//     // res.send("Hello from Server")
//     if(req.url==='/test'){
//         console.log('Send data to Test URL')
//     }
// })

// server.listen(3000, () => {
//     console.log('Server runing Successfully');
// })
// const http = require('http');
// const sever = http.createServer((req, res)=>{
//     res.send('Hello from server')
//     if(req.url ==='/test'){
//         console.log('Data send to Test Route')
//     }
// })

// sever.listen((3000, ()=>{
//     console.log('Server trational runing successfully')
// }))
const express = require('express');
const app = express();

app.use(express.json());
let users = [];


// create the user
app.post("/users", (req, res) => {
    const data = { id: Date.now(), ...req.body };
    users.push(data);
    res.status(201).json(users);
})


// get the user
app.get('/users', (req, res) => {
    res.json(users);
})


// update user
app.put('/users/:id', (req, res) => {
    const id = Number(req.params.id);
    users = users.map(u =>
        u.id === id ? { ...u, ...req.body } : u
    );
    res.json({ message: "Updated" });
})

// delete user

app.delete('/user/id',(req, res)=>{
    const id =  req.params.id;
    users = users.filter(u=> u.id !==id);
    res.json({message: 'Deleted'})
})

// middleware
app.use((req, res, next)=>{
    console.log(`${req.method} ${req.url}`)
    next();
})

// jwt token verify

app.use((req, res, next)=>{
    const token = req.header.authorization;
    if(!token){
        return res.status(401).json({message: 'No Token'})
    }
    try{
        const decoded = jwt.verify(token, 'secret');
        req.user= decoded;
        next();
    }catch(error){
        res.status(500).json({message: 'Invalid token'})
    }
})

app.use((req, res, next) => {
    const { data } = req;
    next()
})
app.listen(3000, () => {
    console.log('Server is runing')
})