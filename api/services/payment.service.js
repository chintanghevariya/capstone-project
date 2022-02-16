// Set current environment
const env = process.env.NODE_ENV || "development";

// Get config for environment
const config = require('../config/config.json')[env];

// Get stripe secret from config
const { STRIPE_SECRET_KEY } = config;

// Import and initialize stripe
const stripe = require('stripe')(STRIPE_SECRET_KEY);

// Get email validator
const validEmail = require('../helpers/validEmail');

class PaymentService {
    async createCustomer(userDetails) {
        const { email, firstName, lastName } = userDetails;
        if (email === undefined || email === null) {
            throw new Error("Token is not valid");
        }
        const name = firstName + " " + lastName;
        const customer = await stripe.customers.create({
            email,
            name,
            metadata: {
                amountInWallet: 0
            }
        });
        return {};
    }

    async createSetupIntent(userDetails) {
        const { email } = userDetails;
        if (email === undefined || email === null) {
            throw new Error("Token is invalid");
        }
        if (typeof email !== "string") {
            throw new Error("Email must be a string");
        }
        if (!validEmail(email)) {
            throw new Error("Email is not in a valid format");
        }
        const customer = await this.getCustomerByEmail(email);
        if (customer.data.length === 0) {
            throw new Error("User does not have stripe customer account");
        }
        const setupIntent = await stripe.setupIntents.create({
            customer: customer.data[0].id,
        });
        return setupIntent.client_secret;
    }

    async getCustomerByEmail(email) {
        const customer = await stripe.customers.list({
            email,
            limit: 1,
        });
        return customer;
    }

    async getPaymentMethods(user) {
        const { email } = user;
        if (email === undefined || email === null) {
            throw new Error("Token is invalid");
        }
        const customer = await this.getCustomerByEmail(email);
        console.log(customer);
        if (customer.data.length === 0) {
            throw new Error("Customer is not registered in stripe.");
        }
        const methods = await stripe.customers.listPaymentMethods(
            customer.data[0].id,
            { type: "card" }
        );
        return methods.data;
    }

    async addToWallet(user, paymentDetails) {
        const { amount, paymentMethodId } = paymentDetails;
        if (typeof amount !== "number") {
            throw new Error("Amount must be a number");
        }
        const customerAccount = await this.getCustomerByEmail(user.email);
        const { amountInWallet } = customerAccount.data[0].metadata;
        const walletAccount = await stripe.accounts.retrieve(
            config["WALLET_ACC_ID"]
        );
        const paymentIntent = await stripe.paymentIntents.create({
            currency: "cad",
            payment_method_types: ["card"],
            amount: amount * 100,
            customer: customerAccount.data[0].id,
            transfer_data: {
                destination: walletAccount.id,
            },
        });
        await stripe.paymentIntents.confirm(paymentIntent.id, {
            payment_method: paymentMethodId,
        });
        stripe.customers.update(customerAccount.data[0].id, {
            metadata: {
                amountInWallet:
                    Number(amountInWallet) + amount,
            },
        });
        return {};
    }

    async confirmPaymentIntent(user, paymentIntentId, paymentMethodId) {
        const customerAccount = await this.getCustomerByEmail(user.email);
        const confirmedIntent = await stripe.paymentIntents.confirm(paymentIntentId, {
            payment_method: paymentMethodId,
        });
        return "Done";
    }
}

module.exports = new PaymentService;