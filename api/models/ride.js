const mongoose = require('mongoose');

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

const rideSchema = new mongoose.Schema({
    from: {
        type: locationSchema,
        required: true
    },
    to: {
        type: locationSchema,
        required: true
    },
    startDateAndTime: Date,
    numberOfSeats: {
        type: Number,
        required: true
    },
    pricePerSeat: {
        type: Number,
        required: true
    },
    preferences: [String],
    paymentType: {
        type: String,
        required: true,
        default: "Cash"
    },
    stops: {
        type: [locationSchema],
        default: []
    }
})

const Ride = mongoose.model("ride", rideSchema)

module.exports = Ride