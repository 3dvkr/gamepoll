const express = require('express');
const router = express.Router();

const submitController = require('../controllers/submitController');

router.post('/gameSubmit', submitController);

module.exports = router