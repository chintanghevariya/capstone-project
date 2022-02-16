// Import dependencies
const express = require('express');
const httpResponse = require('../helpers/httpResponse');
const { verifyToken } = require('../helpers/token');
const paymentService = require('../services/payment.service');

const paymentRouter = express.Router();

// Create stripe customer route
paymentRouter.post('/customer', verifyToken, async function (req, res, next) {
    try {
        await paymentService.createCustomer(req.user);
        httpResponse.sendSuccess(res, "Customer account created", {});
    } catch (e) {
        httpResponse.sendFailure(res, e.message);
    }
});

// Create stripe SetupIntent route
paymentRouter.post('/setup', verifyToken, async function (req, res, next) {
    try {
        const secret = await paymentService.createSetupIntent(req.user);
        httpResponse.sendSuccess(res, "Setup intent created", { secret });
    } catch (e) {
        console.log(e.message);
        httpResponse.sendFailure(res, e.message);
    }
})

// Get all payment methods route
paymentRouter.get("/methods", verifyToken, async function (req, res, next) {
    try {
        const methods = await paymentService.getPaymentMethods(req.user);
        httpResponse.sendSuccess(res, "Payment methods fetched successfully.", { methods });
    } catch (e) {
        httpResponse.sendFailure(res, e.message);
    }
})

// Create payment intent method
paymentRouter.post("/wallet", verifyToken, async function (req, res, next) {
    try {
        const details = await paymentService.addToWallet(
            req.user,
            req.body.paymentDetails,
        );
        httpResponse.sendSuccess(res, "Added to wallet.", {
            details
        });
    } catch (e) {
        console.log(e);
        httpResponse.sendFailure(res, e.message);
    }
})

// Confirm payment intent method
paymentRouter.post("/intent/confirm", verifyToken, async function (req, res, next) {
    try {
        const details = await paymentService.confirmPaymentIntent(
            req.body.paymentIntentId,
            req.body.paymentMethodId
        );
        httpResponse.sendSuccess(res, "Payment intent confirmed successfully.", {
            details,
        });
    } catch (e) {
        httpResponse.sendFailure(res, e.message);
    }
})

module.exports = paymentRouter;