// Set current environment
const env = process.env.NODE_ENV || "development";

// Get config for environment
const config = require('../config/config.json')[env];

// Get stripe secret from config
const { STRIPE_SECRET_KEY } = config;

// Import and initialize stripe
const stripe = require('stripe')(STRIPE_SECRET_KEY);

class PaymentService {

    async createCustomer(userDetails) {
        const { email, firstName, lastName } = userDetails;
        if (email === undefined || email === null) {
            throw new Error("Token is not valid");
        }
        const name = firstName + " " + lastName;
        const customer = await stripe.customers.create({
            email, name
        })
        return {}; 
    }
    
}

module.exports = new PaymentService;