const express = require('express');
const router = express.Router();
const dummy = require('../dummyData');
const verifyToken = require('../Middleware/verifytoken');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/ZozysDB');

const itemSchema = mongoose.Schema({ 
    name: String, 
    price: Number, 
    stock: Number, 
    type: String, 
    dimensions: String
});

const Wood = mongoose.model('Wood', itemSchema);
const Furniture = mongoose.model('Furniture', itemSchema);

router.get('/data', verifyToken, (req, res) => {
    res.status(201).json(dummy);
});

router.post('/updatewood', (req, res) => {
    const { name, price, stock, type, dimensions } = req.body;
    const wood = new Wood({
        name,
        price,
        stock,
        type,
        dimensions
    });
    wood.save();
});

router.post('/updatefurniture', verifyToken, (req, res) => {
    const { name, price, stock, type, dimensions } = req.body;
    const furniture = new Furniture({
        name,
        price,
        stock,
        type,
        dimensions
    });
    furniture.save();
});
module.exports = router;