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
            const user = {};
            createUser(user)
                .end(function(err, res) {
                    res.status.should.be.equal(200);
                })
        })
    })

})