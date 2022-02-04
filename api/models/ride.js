const mongoose = require('mongoose');
const User = require('./user');

const locationSchema = new mongoose.Schema({
    locationName: {
        type: String,
        required: true
    },
    latitude: {
        type: Number,
        required: true
    },
    longitude: {
        type: Number,
        required: true
    }
})

const rideException = new mongoose.Schema({
    isCancelled: {
        type: Boolean,
        default: false
    },
    isRescheduled: {
        type: Boolean,
        default: false
    },
    rideDate: {
        type: Date,
        default: Date.now
    }
})

const passengerException = new mongoose.Schema({
    isCancelled: {
        type: Boolean,
        default: true
    },
    rideDate: {
        type: Date,
        default: Date.now
    }
})

const passenger = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    code: {
        type: "String",
        required: true
    },
    joinedAt: {
        type: Date,
        default: Date.now
    }
});

const rideSchema = new mongoose.Schema({
    from: {
        type: locationSchema,
        required: true,
    },
    to: {
        type: locationSchema,
        required: true,
    },
    startDateAndTime: Date,
    numberOfSeats: {
        type: Number,
        required: true,
    },
    pricePerSeat: {
        type: Number,
        required: true,
    },
    preferences: [String],
    paymentType: {
        type: String,
        required: true,
        default: "Cash",
    },
    stops: {
        type: [locationSchema],
        default: [],
    },
    isRecurring: {
        type: Boolean,
        default: false,
    },
    occursEvery: {
        type: [String],
        default: [],
    },
    passengers: [passenger],
    passengerException: {
        type: [passengerException],
        default: [],
    },
    rideExceptions: {
        type: [rideException],
        default: [],
    },
});

const Ride = mongoose.model("ride", rideSchema)

module.exports = Ride