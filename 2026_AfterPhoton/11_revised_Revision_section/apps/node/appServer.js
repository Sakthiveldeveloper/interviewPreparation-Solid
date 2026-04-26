// const express = require('express');
// const app = express();

// app.get('/', (req, res) => {
//     // console.log('Run Get api call')
//     res.send('Run Get api call')
// })
// app.get('/users', (req, res) => {
//     res.json([
//         { id: 1, name: 'Sakthi' },
//         { id: 2, name: 'John' }
//     ]);
// });

// app.use(express.json());

// app.post('/users', (req, res) => {
//     const user = req.body;
//     res.json({ message: 'User added', user });
// });

// const logger = (req, res, next) => {
//   console.log(`${req.method} ${req.url}`);
//   next();
// };

// app.use(logger);

// app.get('/user/:id', (req, res) => {
//   res.send(req.params.id);
// });

// app.get('/search', (req, res) => {
//   res.send(req.query.name);
// });
// app.listen(2020, () => {
//     console.log('Run Express app')
// })
const express = require('express');
const app = express();

app.use(express.json());

let users = [];

app.post('/users', (req, res) => {
    const user = req.body;
    users.push(user);

    res.json({
        message: 'User added successfully',
        users
    });
});

app.get('/users', (req, res) => {
    res.json(users);
});

app.get('/users/:id', (req, res) => {
    const id = parseInt(req.params.id);

    const user = users.find(u => u.id === id);

    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }

    res.json(user);
});

app.listen(3001, () => {
    console.log('Server running on port 3001');
});
