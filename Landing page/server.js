// server.js

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3001;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Store user data in memory (for simplicity)
let users = [];

app.post('/signup', (req, res) => {
    const { email, password, confirmPassword } = req.body;
    if (password !== confirmPassword) {
        return res.status(400).send('Passwords do not match');
    }
    users.push({ email, password });
    console.log('New user signed up:', email);
    res.redirect('/welcome');
});

app.get('/welcome', (req, res) => {
    res.send('Welcome to the site!');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
