var db = require("../models");
var axios = require("axios");

// var path = require("path");

module.exports = function(app) {
    // Load index page

    // home route
    // app.get("/", function(req, res) {
    //   res.sendFile(path.join(__dirname, "../public/home.html"));
    // });

    // // transaction.html route
    // app.get("/history", function(req, res) {
    //   res.sendFile(path.join(__dirname, "../public/transaction.html"));
    // });

    // // input transaction route
    // app.get("/new", function(req, res) {
    //   res.sendFile(path.join(__dirname, "../public/input.html"));
    // });

    // app.get("*", function(req, res) {
    //   res.render("404");
    // });

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
        res.render("transaction", {
            msg: "Transaction history!"
                // examples: dbExamples
        });
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