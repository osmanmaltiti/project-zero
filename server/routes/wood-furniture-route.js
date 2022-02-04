const express = require('express');
const router = express.Router();
const dummy = require('../dummyData');

router.get('/api/data', (req, res) => {
    res.status(201).json(dummy);
});

module.exports = router;