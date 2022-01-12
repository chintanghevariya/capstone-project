// Import dependencies
const express = require('express');

// Initialize router
const userRouter = express.Router();

userRouter.post('/', function (req, res, next) {
    res.sendStatus(200);
});

module.exports = userRouter;