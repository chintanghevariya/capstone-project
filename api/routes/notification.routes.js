const express = require('express');
const httpResponse = require('../helpers/httpResponse');
const { verifyToken } = require('../helpers/token');
const notificationService = require('../services/notification.service');

const notificationRouter = express.Router();

notificationRouter.get("/", verifyToken, async (req, res) => {
    try {
        const notifications = await notificationService.getUserNotifications(req.user);
        httpResponse.sendSuccess(res, "Notifications fetched successfully", {
            notifications
        });
    } catch (e) {
        httpResponse.sendFailure(res, e.message)
    }
})

module.exports = notificationRouter;