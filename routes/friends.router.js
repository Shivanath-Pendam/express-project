const express = require('express');

const friendsController = require('../controllers/friends.controller');

const friendRouter = express.Router();

friendRouter.use((req, res, next) => {
    console.log(`ip address: ${req.ip}`);
    next();
})

friendRouter.post('/', friendsController.postFriend);
friendRouter.get('/', friendsController.getAllFriends);
friendRouter.get('/:id', friendsController.getFriend);

module.exports = friendRouter;