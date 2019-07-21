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

      });
      done();
    });

      it("should see if each response object exists", function(done) {

        request.get("/api/transactions").end(function(err, res) {
          var responseBody = res.body;
        for(i = 0; i < responseBody.length; i++) {

          should.exist(responseBody[i]);
          responseBody[i].should.be.an('object');
         

        }
      });
      done();      
    });

      it("should see if each response object has the necessary keys", function(done) {

      request.get("/api/transactions").end(function(err, res) {
        var responseBody = res.body;
      for(i = 0; i < responseBody.length; i++) {
        expect(responseBody[i]).to.contain.keys('id', 'type', 'memo', 'amount', 'UserId');
      }
    });
    done();  
  });

  it("should see if each response object has a type of payment and if it's a string", function(done) {

    request.get("/api/transactions").end(function(err, res) {
      var responseBody = res.body;
      for(i = 0; i < responseBody.length; i++) {
         // Testing for type of payment
         var type = responseBody[i].type;

         should.exist(type);

         type.should.be.an('string');
        
      }
    });
    done();  
  });

  it("should see if each response object has a memo and if it's a string/text", function(done) {

    request.get("/api/transactions").end(function(err, res) {
      var responseBody = res.body;
      for(i = 0; i < responseBody.length; i++) {
         // Testing for memo
         var memo = responseBody[i].memo;

         memo.should.not.be.an('number');
      }
    });
    done(); 
  });
         
  it("should see if each response object has an amount and if it's a number", function(done) {

    request.get("/api/transactions").end(function(err, res) {
      var responseBody = res.body;
      for(i = 0; i < responseBody.length; i++) {
             // Testing for amount

             var amount = responseBody[i].amount;

             should.exist(amount);
   
             amount.should.be.an('number');
      }
    });
    done();  
  });


        
        // The `done` function is used to end any asynchronous tests
      });

