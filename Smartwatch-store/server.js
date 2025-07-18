const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

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

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
