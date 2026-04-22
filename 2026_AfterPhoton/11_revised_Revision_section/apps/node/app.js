// Node js Coding questions in Http module

// 1.create the simple server in the http
// const http = require('http');
// const { createServer } = http;
// const server =  createServer((req, res)=>{
//     res.end('Server reached')
// })
// server.listen(4000,()=>{
//     console.log('Server is runing in the PORT 4000')
// })

// 2.Multiple rounting with http module
// const http = require('http');
// const { createServer } = http;
// const PORT = 3000
// const server = createServer((req, res) => {
//     if (req.url === '/user') {
//         res.end('Reach the user get URL')
//     } else if (req.url === '/about') {
//         res.end('Reach the About URL')
//     } else {
//         res.statusCode(404);
//         res.end('Page Not found')
//     }
// })
// server.listen(PORT, () => {
//     console.log(`server run s on the port ${PORT}`)
// })

// 3. post data in http
// const http = require('http');
// const { createServer } = http;
// const PORT = 3000
// let user = {
//     "name": 'sakthi'
// }
// const server = createServer((req, res) => {
//     if (req.method === 'GET' && req.url === '/user') {
//         // res.end('Reach the user get URL')
//         res.writeHead(200, { 'Content-Type': 'application/json' });
//         res.end(JSON.stringify(user))
//     } else if (req.url === '/about') {
//         res.end('Reach the About URL')
//     } else if (req.method == '/POST' && req.url == '/createUser') {
//         let body = '';
//         req.on('data', chunk => {
//             body += chunk;
//         });

//         req.on('end', () => {
//             const newUser = JSON.parse(body);

//             const user = {
//                 id: user.length + 1,
//                 name: newUser.name
//             };

//             user.push(user);

//             res.writeHead(201, { 'Content-Type': 'application/json' });
//             res.end(JSON.stringify(user));
//         });
//     } else {
//         // res.statusCode(404);
//         res.end('Page Not found')
//     }
// })
// server.listen(PORT, () => {
//     console.log(`server run s on the port ${PORT}`)
// })

// 4.middleware (custom logger / auth)
// const http = require('http');

// // Middleware runner
// const runMiddlewares = (req, res, middlewares, finalHandler) => {
//   let index = 0;

//   const next = () => {
//     if (index < middlewares.length) {
//       const middleware = middlewares[index++];
//       middleware(req, res, next);
//     } else {
//       finalHandler();
//     }
//   };

//   next();
// };
// const server = http.createServer((req, res) => {

//   if (req.url === '/secure') {
//     runMiddlewares(
//       req,
//       res,
//       [logger, auth], // middleware list
//       () => {
//         res.writeHead(200, { 'Content-Type': 'text/plain' });
//         res.end('Secure Data');
//       }
//     );
//   }

//   else if (req.url === '/') {
//     runMiddlewares(
//       req,
//       res,
//       [logger],
//       () => {
//         res.end('Public Route');
//       }
//     );
//   }

//   else {
//     res.writeHead(404);
//     res.end('Not Found');
//   }

// });

// server.listen(3000, () => {
//   console.log('Server running on port 3000');
// });

// 5.Environment variables (process.env)
// const http = require('http');
// const { createServer } = http;
// const PORT = process.env.PORT | 3000
// const server = createServer((req, res) => {
//     res.end('Server Running');
// })
// server.listen(PORT, () => {
//     console.log(`Server runing on ${PORT}`)
// })

//     6.CRUD API (Create, Read, Update, Delete) 🔥
//     7.Connect to DB (MongoDB / Mongoose)
//     8.Error handling middleware
//     9.File upload (basic)
//     10.Authentication (JWT basic login/signup) 🔥
//     11.Async handling (async/await, try/catch) 🔥
//     12.Streams (read/write large file)
//     13.Event loop understanding 🔥
//     14.Caching (basic Redis idea)
//     15.Rate limiting / security basics



// -------------------------------------------------------
// with express
// 1.create server
// const express = require('express');
// const app = express();
// app.use(express.json());

// app.get('/userexpress', (req, res) => {
//     res.end('Get user route runing on the express server')
// })
// app.listen(3000, () => {
//     console.log(`express server runing on ${3000}`)
// })

// 2 .multiple endpoints in express
// const express = require('express');
// const app = express();
// app.use(express.json());

// app.get('/userexpress', (req, res) => {
//     res.end('Get user route runing on the express server')
// })
// app.get('/aboutexpress', (req, res) => {
//     res.end('Get About route runing on the express server')
// })
// app.listen(3000, () => {
//     console.log(`express server runing on ${3000}`)
// })

// 3. post in express
// const express = require('express');
// const app = express();
// app.use(express.json());
// let user = {
//     name: 'sakthi'
// }
// app.get('/userexpress', (req, res) => {
//     res.end('Get user route runing on the express server')
// })
// // // POST
// app.post('/users', (req, res) => {
//     const user = {
//         id: user.length + 1,
//         name: req.body.name
//     };

//     user.push(user);

//     res.status(201).json(user);
// });
// app.listen(3000, () => {
//     console.log(`express server runing on ${3000}`)
// })

// 4.middle ware (custome log and auth)
// const express = require('express');
// const app = express();
// app.use(express.json());

// // logger
// const logger = (req, res, next) => {
//     console.log(`logger middleware ${req.url} and method is ${req.method}`)
//     next();
// }

// // Auth
// const auth = (req, res, next) => {
//     const token = req.header["authorization"];
//     if (token === '12345') {
//         next()
//     } else {
//         res.status(401).json({ message: 'Unauthorized' })
//     }
// }

// app.use(logger)

// app.get('/get', auth, (req, res) => {
//     res.end('reach the get api')
// })

// app.listen(3000, () => {
//     console.log('Reached the Server')
// })

// 5.
//     6.CRUD API (Create, Read, Update, Delete) 🔥
//     7.Connect to DB (MongoDB / Mongoose)
//     8.Error handling middleware
//     9.File upload (basic)
//     10.Authentication (JWT basic login/signup) 🔥
//     11.Async handling (async/await, try/catch) 🔥
//     12.Streams (read/write large file)
//     13.Event loop understanding 🔥
//     14.Caching (basic Redis idea)
//     15.Rate limiting / security basics


// ---------------------------------------------------------
// so the list is
//     1.Create basic HTTP server (without Express)
//     2.Build simple API using Express (GET/POST)
//     3.Routing (multiple endpoints)
//     4.Middleware (custom logger/auth)
//     5.Environment variables (process.env)
//     6.CRUD API (Create, Read, Update, Delete) 🔥
//     7.Connect to DB (MongoDB / Mongoose)
//     8.Error handling middleware
//     9.File upload (basic)
//     10.Authentication (JWT basic login/signup) 🔥
//     11.Async handling (async/await, try/catch) 🔥
//     12.Streams (read/write large file)
//     13.Event loop understanding 🔥
//     14.Caching (basic Redis idea)
//     15.Rate limiting / security basics