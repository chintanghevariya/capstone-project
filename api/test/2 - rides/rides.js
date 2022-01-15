// Import dependencies
const chai = require('chai');
const chaiHttp = require('chai-http');

// Add http dependency in chai
chai.use(chaiHttp);

// Import server
const app = require('../../app');

// Import function to generate token
const { generateToken } = require('../../helpers/token');

chai.should();

describe("Rides Tests", function () {

    describe("Get rides tests", function () {
        function getRides(filters={}) {
            const token = generateToken({ userId: 1 });
            const queryString = Object.keys(filters).map(key => {
                return `${key}=${filters[key]}`;
            }).join("&")
            return chai.request(app)
                .get('/rides?' + queryString)
                .set("Content-Type", "application/json")
                .set("Authorization", "Bearer " + token)
        }

        it ("Should have endpoint to get rides", function () {
            getRides()
                .end(function (err, res) {
                    res.status.should.not.be.equal(404)
                })
        })

        it ("Should return empty array if no filters present", function () {
            getRides()
                .end(function(err, res) {
                    res.status.should.be.equal(200);
                    res.body.should.haveOwnProperty("status")
                    res.body.should.haveOwnProperty("message")
                    res.body.should.haveOwnProperty("data")
                    res.body.status.should.equal("Success");
                    res.body.message.should.equal("Rides fetched successfully")
                    res.body.data.should.have.length(0);
                })
        })

        it ("Should return rides array if filters provided", function (done) {
            const filters = {
                from: "Toronto",
                to: "Ottawa"
            }
            getRides(filters)
                .end(function(err, res) {
                    res.status.should.be.equal(200);
                    res.body.should.haveOwnProperty("status")
                    res.body.should.haveOwnProperty("message")
                    res.body.should.haveOwnProperty("data")
                    res.body.status.should.equal("Success");
                    res.body.message.should.equal("Rides fetched successfully")
                    res.body.data.length.should.be.greaterThan(-1);
                    done()
                })
        })
    })

})