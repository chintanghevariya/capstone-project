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
                return `${key}=${filters[key]}&`;
            })
            return chai.request(app)
                .get('/rides?' + queryString)
                .set("Content-Type", "application/json")
                .set("Authorization", token)
        }

        it ("Should have endpoint to get rides", function () {
            getRides()
                .end(function (err, res) {
                    res.status.should.not.be.equal(404)
                })
        })
    })

})