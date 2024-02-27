const express = require('express');
const { chats } = require('./data/data.js')
const dotenv = require('dotenv');

dotenv.config();

const Port = process.env.PORT || 5000;

const app = express();

app.listen(5000, () => {
    console.log(`Server is running on port ${5000}`);
})


app.get('/', (req, res) => {
    res.json({
        Message: "Server is running 5000"
    })
})


app.get('/api/chats', (req, res) => {
    res.send(chats);
})

app.get('/api/chats/:id', (req, res) => {
    let id = req.params.id;

    const filterData = chats.find(items => items._id === id);
    res.send(filterData)
})