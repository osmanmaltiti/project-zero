const express = require('express');
const router = express.Router();
const { wood } = require('../dummyData');

router.get('/api/beam', (req, res) => {
    const beam = wood.filter(item => item.type === 'Beam');
    res.status(201).json(beam);
});
router.get('/api/board', (req, res) => {
    const board = wood.filter(item => item.type === 'Board');
    res.status(201).json(board);
});
router.get('/api/pole', (req, res) => {
    const pole = wood.filter(item => item.type === 'Pole');
    res.status(201).json(pole);
});

 module.exports = router;