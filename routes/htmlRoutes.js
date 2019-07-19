var db = require("../models");
var axios = require("axios");

// var path = require("path");

module.exports = function(app) {
    app.get("/", function(req, res) {
        var queryUrl = "https://financialmodelingprep.com/api/v3/stock/gainers";
        axios.get(queryUrl)
            .then(function(response) {
                // console.log(response);
                for (i = 0; i < response.data.mostGainerStock.length; i++) {
                    // response.data[i];
                    console.log(response.data.mostGainerStock[i]);
                }
                var data = {
                    stocks: response.data.mostGainerStock
                }
                res.render("home", data);
            })
            .catch(function(error) {
                if (error.response) {
                    console.log(error.response);
                }
            });
    });

    // Load example page and pass in an example by id
    app.get("/transaction", function(req, res) {
            res.render("transaction");
        })
        

    app.get("/transactions", function(req, res) {
    var instance = axios.create({ baseURL: 'http://localhost:3000' });
    instance.get('/api/transactions', { timeout: 5000 });
        axios.get("api/transactions")
            .then(function(response){
                console.log(response.data);
                res.send(response.data);
            })
    });

    app.get("/input", function(req, res) {
        res.render("input", {
            msg: "Input new transaction!"
                // examples: dbExamples
        });
    });

    // Render 404 page for any unmatched routes
    app.get("*", function(req, res) {
        res.render("404");
    });
};