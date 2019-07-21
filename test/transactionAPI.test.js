const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../server");
const db = require("../models");
const expect = chai.expect;
const should = require('chai').should();

// Setting up the chai http plugin
chai.use(chaiHttp);

var request;

describe("GET /api/transactions", function() {
  // Before each test begins, create a new request server for testing
  // & delete all examples from the db
  beforeEach(function() {
    request = chai.request(server);

  });

  it("should see if transactions exist", function(done) {

      // Request the route that returns all examples
      request.get("/api/transactions").end(function(err, res) {
        var responseStatus = res.status;
        var responseBody = res.body;

        // Run assertions on the response

        expect(err).to.be.null;

        expect(responseStatus).to.equal(200);

        // Testing to see if there's anything in the response

        should.exist(responseBody);

        responseBody.should.be.an('array');

      }


        for(i = 0; i < responseBody.length; i++) {

          expect(responseBody[i]).to.contain.keys('id', 'type', 'memo', 'amount', 'UserId');

          should.exist(responseBody[i]);
          responseBody[i].should.be.an('object');

          // Testing for type of payment
          var type = responseBody[i].type;

          should.exist(type);

          type.should.be.an('string');

          // Testing for memo
          var memo = responseBody[i].memo;

          memo.should.not.be.an('number');

          // Testing for amount

          var amount = responseBody[i].amount;

          should.exist(amount);

          amount.should.be.an('number');



        }

        
        // The `done` function is used to end any asynchronous tests
        done();
      });
    });
  });

