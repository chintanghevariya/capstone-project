const mongoose = require('mongoose');

const schema = mongoose.Schema({
    fromUser: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    forUser: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    ride: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Ride",
        required: true
    },
    type: {
        type: String,
        enum: ["join-request", "cancel-ride", "accept-request", "reject-request"],
        required: true
    },
    createdDate: {
        type: Date,
        default: Date.now
    },
    seen: {
        type: Boolean,
        default: false
    }
});