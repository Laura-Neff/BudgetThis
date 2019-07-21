var chai = require("chai");
var chaiHttp = require("chai-http");
var server = require("../server");
var db = require("../models");
var expect = chai.expect;
var should = require('chai').should();

// Setting up the chai http plugin
chai.use(chaiHttp);

var request;

describe("GET /api/transactions", function() {
  // Before each test begins, create a new request server for testing
  // & delete all examples from the db
  beforeEach(function() {
    request = chai.request(server);

    // return db.sequelize.sync({ force: true });

    // get rid of this after post statements start working
  });

  it("should find all transactions", function(done) {
    // Add some examples to the db to test with

      // Remove the bulkCreate and promise statements after post methods start working
      // only keep requests

      // Request the route that returns all examples
      request.get("/api/transactions").end(function(err, res) {
        var responseStatus = res.status;
        var responseBody = res.body;

        // Run assertions on the response

        expect(err).to.be.null;

        // expect(responseStatus).to.equal(200);

        // Testing to see if there's anything in the response

        should.exist(responseBody);

        responseBody.should.be.an('array');


        // expect(responseBody).to.be.instanceOf(db.Transaction);

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

          // expect(responseBody[i]).to.be.instanceOf(db.Transaction);



        }

        

        // expect(responseBody)
        //   .to.be.an("array")
        //   .that.has.lengthOf(2);

        // expect(responseBody[0])
        //   .to.be.an("object")
        //   .that.includes({ text: "First transaction", description: "First Description" });

        // expect(responseBody[1])
        //   .to.be.an("object")
        //   .that.includes({ text: "Second transaction", description: "Second Description" });

        // The `done` function is used to end any asynchronous tests
        done();
      });
    });
  });

