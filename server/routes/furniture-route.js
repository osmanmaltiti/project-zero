const express = require('express');
const router = express.Router();
const { furniture } = require('../dummyData');

router.get('/api/singlepanel', (req, res) => {
    const single = furniture.filter(item => item.type === 'Single-panel');
    res.status(201).json(single);
});

router.get('/api/doublepanel', (req, res) => {
    const double = furniture.filter(item => item.type === 'Double-panel');
    res.status(201).json(double);
});

module.exports = router;