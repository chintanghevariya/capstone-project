// Import dependencies
const chai = require('chai');
const chaiHttp = require('chai-http');

// Add http dependency in chai
chai.use(chaiHttp);

// Import server
const app = require('../../app');

chai.should();

// Import function to generate token
const { generateToken } = require('../../helpers/token');

describe("Stripe and payment tests", function () {

    describe("Create customer tests", function () {

        function createCustomer(token) {
            return chai.request(app)
                .post('/payments/customer')
                .set("Content-Type", "application/json")
                .set("Authorization", "Bearer " + token)
        }

        it ("Should have route to create stripe customer account", function (done) {
            const token = generateToken({
                userId: "61df6e45bd6fe4e712e20dac",
            });
            createCustomer(token)
                .end(function (err, res) {
                    res.status.should.not.be.equal(404);
                    done();
                })
        })

        it ("Should return success if stripe customer is created successfully", function (done) {
            const token = generateToken({
                userId: "61df6e45bd6fe4e712e20dac",
            });
            createCustomer(token)
                .end(function (err, res) {
                    res.status.should.be.equal(400);
                    res.body.should.haveOwnProperty("status");
                    res.body.should.haveOwnProperty("error");
                    res.body.status.should.equal("Failure");
                    res.body.error.should.equal("Token is not valid");
                    done();
                })
        })

        it ("Should return success if stripe customer is created successfully", function (done) {
            const token = generateToken({
                userId: "61df6e45bd6fe4e712e20dac",
                email: "aarytrivedi@gmail.com",
                firstName: "Aary",
                lastName: "Trivedi"
            });
            createCustomer(token)
                .end(function (err, res) {
                    res.status.should.be.equal(200);
                    res.body.should.haveOwnProperty("status");
                    res.body.should.haveOwnProperty("message");
                    res.body.should.haveOwnProperty("data");
                    res.body.status.should.equal("Success");
                    res.body.message.should.equal("Customer account created");
                    res.body.data.should.empty;
                    done();
                })
        })
    })

})