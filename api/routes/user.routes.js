// Import dependencies
const express = require('express');
const httpResponse = require('../helpers/httpResponse');
const userService = require('../services/user.service');
const { verifyToken } = require('../helpers/token');
// Initialize router
const userRouter = express.Router();

// Get ride by id route
userRouter.get("/", verifyToken, async function (req, res, next) {
    try {
        const user = await userService.getUserById(req.user._id);
        httpResponse.sendSuccess(res, "User fetched successfully", { user });
    } catch (e) {
        httpResponse.sendFailure(res, e.message);
    }
})

userRouter.post('/', async function (req, res, next) {
    try {
        const result = await userService.createUser(req.body);
        httpResponse.sendSuccess(res, "User created successfully", result);
    }catch (e) {
        httpResponse.sendFailure(res, e.message);
    }
});

userRouter.post('/login', async function (req, res, next) {
    try {
        const result = await userService.loginUser(req.body);
        httpResponse.sendSuccess(res, "Authenticated successfully", result);
    } catch (e) {
        httpResponse.sendFailure(res, e.message);
    }
})

userRouter.post("/review", verifyToken, async function (req, res, next) {
    try {
        const result = await userService.createReview(req.user, req.body);
        httpResponse.sendSuccess(res, "Review added successfully", result);
    } catch (e) {
        httpResponse.sendFailure(res, e.message);
        console.log(e);
    }
})

userRouter.get("/:userId/reviews", verifyToken, async function (req, res, next) {
    try {
        const result = await userService.getReviewOfUser(req.params.userId);
        httpResponse.sendSuccess(res, "Review added successfully", result);
    } catch (e) {
        httpResponse.sendFailure(res, e.message);
    }
})

module.exports = userRouter;