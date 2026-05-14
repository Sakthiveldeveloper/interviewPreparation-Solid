// const http = require('http');
// const { use } = require('react');

// let user = {
//     "name": 'sakthi'
// }
// const server = http.createServer((req, res) => {
//     if (req.url == '/get') {
//         console.log('Server use get URL')
//     } else if (req.method == 'POST' && req.url == '/createUser') {
//         let body = '';
//         req.on('data', chunk => {
//             body += chunk;
//         });
//         req.on('end', () => {
//             const newUser = JSON.parse(body);
//             const user = {
//                 id: user.length + 1,
//                 name: user.name
//             };
//             user.push(user);

//             res.writeHead(201, { 'Content-Type': 'application/json' });
//             res.end(JSON.stringify(user))
//         })
//     } else if (req.method == 'GET' && req.url =='about'){

//     } else {
//         res.end('Page Not Found')
//     }
// })

// server.listen(3000, () => {
//     console.log('Server runing')
// })

// ----------------------------------------------------
const http = require('http');

let users = [{ "id": 1, "name": 'sakthi' }]; 

// --- 1. LOGGER MIDDLEWARE ---
// Logs the incoming request details and execution time
const loggerMiddleware = (req, res, next) => {
    const startTime = Date.now();
    res.on('finish', () => {
        const duration = Date.now() - startTime;
        console.log(`[${new Date().toISOString()}] ${req.method} ${req.url} - ${res.statusCode} (${duration}ms)`);
    });
    next(); // Move to the next step
};

// --- 2. AUTHENTICATION MIDDLEWARE ---
// Checks for a valid token in the "Authorization" header
const authMiddleware = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    
    // Simple check: looking for a token named "secret-token"
    if (authHeader && authHeader === 'Bearer secret-token') {
        req.user = { role: 'admin' }; // Attach user data to request object
        next(); // Authorized, proceed
    } else {
        res.writeHead(401, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Unauthorized: Missing or invalid token' }));
    }
};

// --- MAIN SERVER CODE ---
const server = http.createServer((req, res) => {
    const sendJSON = (statusCode, data) => {
        res.writeHead(statusCode, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(data));
    };

    // Run Logger for every single request
    loggerMiddleware(req, res, () => {
        
        if (req.method === 'GET' && req.url === '/get') {
            sendJSON(200, users);
        } 
        else if (req.method === 'POST' && req.url === '/createUser') {
            // Protect this endpoint with Auth Middleware
            authMiddleware(req, res, () => {
                let body = '';
                req.on('data', chunk => { body += chunk; });
                req.on('end', () => {
                    try {
                        const newUser = JSON.parse(body); 
                        const userObj = { id: users.length + 1, name: newUser.name };
                        users.push(userObj); 
                        sendJSON(201, userObj);
                    } catch (e) {
                        sendJSON(400, { error: 'Invalid JSON' });
                    }
                });
            });
        } 
        else if (req.method === 'GET' && req.url === '/about') {
            res.end('About Page');
        } 
        else {
            res.writeHead(404);
            res.end('Page Not Found');
        }
    });
});

server.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
