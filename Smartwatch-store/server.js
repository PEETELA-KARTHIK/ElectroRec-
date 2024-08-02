const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());

mongoose.connect('mongodb://localhost:27017/smartwatch_store', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const phoneSchema = new mongoose.Schema({
    name: String,
    price: Number,
    category: String,
    image: String,
    specs: String
});

const Phone = mongoose.model('Phone', phoneSchema);

app.get('/phones', async (req, res) => {
    const phones = await Phone.find();
    res.json(phones);
});

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
