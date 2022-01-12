// Import dependencies
const chai = require('chai');
const chaiHttp = require('chai-http');
const mongoose = require('mongoose');

// Add http dependency in chai
chai.use(chaiHttp);

// Import server
const app = require('../../app');

chai.should();

describe("User tests", function () {

    describe("Create user test", function () {
        function createUser(user) {
            return chai.request(app)
                .post('/users')
                .set("Content-Type", "application/json")
                .send(user)
        }

        it ("Should have route to create user", function () {
            const user = {
                email: "test@gmail.com",
                firstName: "Test",
                lastName: "Test",
                password: "123456"
            };
            createUser(user)
                .end(function(err, res) {
                    res.status.should.be.equal(200);
                })
        })

        it ("Should throw error if email is not present", function () {
            const user = {};
            createUser(user)
                .end(function(err, res) {
                    res.status.should.be.equal(400);
                    res.body.should.haveOwnProperty("status");
                    res.body.should.haveOwnProperty("error");
                    res.body.status.should.equal("Failure");
                    res.body.error.should.equal("Email cannot be empty");
                })
        })

        it ("Should throw error if email is empty", function () {
            const user = {
                email: "    "
            }
            createUser(user)
                .end(function (err, res) {
                    res.status.should.be.equal(400);
                    res.body.should.haveOwnProperty("status");
                    res.body.should.haveOwnProperty("error");
                    res.body.status.should.equal("Failure");
                    res.body.error.should.equal("Email cannot be empty");
                })
        })

        it ("Should throw error if firstName is not present", function () {
            const user = {
                email: "aarytrivedi@gmail.com",
            };
            createUser(user)
                .end(function(err, res) {
                    res.status.should.be.equal(400);
                    res.body.should.haveOwnProperty("status");
                    res.body.should.haveOwnProperty("error");
                    res.body.status.should.equal("Failure");
                    res.body.error.should.equal("First name cannot be empty");
                })
        })

        it ("Should throw error if firstName is empty", function () {
            const user = {
                email: "aarytrivedi@gmail.com",
                firstName: "   "
            };
            createUser(user)
                .end(function (err, res) {
                    res.status.should.be.equal(400);
                    res.body.should.haveOwnProperty("status");
                    res.body.should.haveOwnProperty("error");
                    res.body.status.should.equal("Failure");
                    res.body.error.should.equal("First name cannot be empty");
                })
        })

        it ("Should throw error if lastName is not present", function () {
            const user = {
                email: "aarytrivedi@gmail.com",
                firstName: "Aary"
            };
            createUser(user)
                .end(function(err, res) {
                    res.status.should.be.equal(400);
                    res.body.should.haveOwnProperty("status");
                    res.body.should.haveOwnProperty("error");
                    res.body.status.should.equal("Failure");
                    res.body.error.should.equal("Last name cannot be empty");
                })
        })

        it ("Should throw error if lastName is empty", function () {
            const user = {
                email: "aarytrivedi@gmail.com",
                firstName: "Aary",
                lastName: "   "
            };
            createUser(user)
                .end(function (err, res) {
                    res.status.should.be.equal(400);
                    res.body.should.haveOwnProperty("status");
                    res.body.should.haveOwnProperty("error");
                    res.body.status.should.equal("Failure");
                    res.body.error.should.equal("Last name cannot be empty");
                })
        })

        it ("Should throw error if password is not present", function () {
            const user = {
                email: "aarytrivedi@gmail.com",
                firstName: "Aary",
                lastName: "Trivedi"
            };
            createUser(user)
                .end(function(err, res) {
                    res.status.should.be.equal(400);
                    res.body.should.haveOwnProperty("status");
                    res.body.should.haveOwnProperty("error");
                    res.body.status.should.equal("Failure");
                    res.body.error.should.equal("Password cannot be empty");
                })
        })

        it ("Should throw error if password is empty", function () {
            const user = {
                email: "aarytrivedi@gmail.com",
                firstName: "Aary",
                lastName: "Trivedi",
                password: "   "
            };
            createUser(user)
                .end(function (err, res) {
                    res.status.should.be.equal(400);
                    res.body.should.haveOwnProperty("status");
                    res.body.should.haveOwnProperty("error");
                    res.body.status.should.equal("Failure");
                    res.body.error.should.equal("Password cannot be empty");
                })
        })

        it ("Should throw error if password is less than 6 digits", function () {
            const user = {
                email: "aarytrivedi@gmail.com",
                firstName: "Aary",
                lastName: "Trivedi",
                password: "123"
            };
            createUser(user)
                .end(function (err, res) {
                    res.status.should.be.equal(400);
                    res.body.should.haveOwnProperty("status");
                    res.body.should.haveOwnProperty("error");
                    res.body.status.should.equal("Failure");
                    res.body.error.should.equal("Password must be of 6 characters");
                })
        })

        it ("Should create user if all validations pass", function () {
            const user = {
                email: "aarytrivedi@gmail.com",
                firstName: "Aary",
                lastName: "Trivedi",
                password: "123456"
            }
            createUser(user)
                .end(function (err, res) {
                    res.status.should.equal(200);
                    res.body.should.haveOwnProperty("status");
                    res.body.should.haveOwnProperty("message");
                    res.body.should.haveOwnProperty("data");
                    res.body.status.should.equal("Success");
                    res.body.message.should.equal("User created successfully");
                    res.body.data.should.haveOwnProperty("_id");
                })
        });
    })

})