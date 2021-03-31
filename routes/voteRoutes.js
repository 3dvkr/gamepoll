const express = require('express')
const voteController = require('../controllers/voteControllers')
const router = express.Router(); 


router.get('/', voteController.vote_index);

router.patch('/upvote/:id', voteController.vote_upvote);

router.patch('/downvote/:id', voteController.vote_downvote);

module.exports = router;