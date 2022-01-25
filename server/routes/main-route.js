const express = require('express');
const router = express.Router();
const dummyData = require('../dummyData');

router.get('/api/data', (req, res) => {
    res.json(dummyData)
 });

 module.exports = router;