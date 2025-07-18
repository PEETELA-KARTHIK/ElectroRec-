const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

const phoneSchema = new mongoose.Schema({
    name: String,
    price: Number,
    category: String,
    image: String,
    specs: {
        display: String,
        camera: String,
        battery: String,
        gaming: String
    },
    rating: {
        camera: Number,
        gaming: Number,
        display: Number,
        value: Number
    }
});

const Phone = mongoose.model('Phone', phoneSchema);

app.get('/phones', async (req, res) => {
    const phones = await Phone.find();
    res.json(phones);
});

app.get('/phones/:category', async (req, res) => {
    const category = req.params.category;
    let phones;
    if (category === 'all') {
        phones = await Phone.find();
    } else {
        phones = await Phone.find({ category: category });
    }
    res.json(phones);
});

app.get('/phones/sort/:criteria', async (req, res) => {
    const criteria = req.params.criteria;
    let sortField;
    switch(criteria) {
        case 'best-camera':
            sortField = 'rating.camera';
            break;
        case 'best-gaming':
            sortField = 'rating.gaming';
            break;
        case 'best-display':
            sortField = 'rating.display';
            break;
        case 'best-value':
            sortField = 'rating.value';
            break;
        default:
            sortField = null;
    }
    if (sortField) {
        const phones = await Phone.find().sort({ [sortField]: -1 });
        res.json(phones);
    } else {
        res.status(400).json({ error: 'Invalid sorting criteria' });
    }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
