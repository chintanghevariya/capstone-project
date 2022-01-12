// Import dependencies
const chai = require('chai');
const chaiHttp = require('chai-http');

// Add http dependency in chai
chai.use(chaiHttp);

// Import server
const app = require('../../app');

chai.should();

describe("Startup Tests", function() {

    it ("Should start the server", function (done) {
        chai.request(app)
            .get('/')
            .set("Content-Type", "application/json")
            .end(function (err, res) {
                res.status.should.equal(200);
                done();
            })
    })
    
})