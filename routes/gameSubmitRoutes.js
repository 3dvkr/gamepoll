const express = require('express');
const router = express.Router();

const submitController = require('../controllers/submitController');

router.post('/', submitController);

module.exports = router;