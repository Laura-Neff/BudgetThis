var db = require("../models");
var axios = require("axios");

// var path = require("path");

module.exports = function(app) {
    // Load index page

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
        db.Transaction.findAll({}).then(function(resp) {
            var total = 7500
            var cash=0;
            var credit=0;
            var wit =0 ;
            var stock=0;
            for (let i = 0; i < resp.length; i++) {
                if (resp[i].type === 'Deposit')
                    total += resp[i].amount;
                else
                    total -= resp[i].amount;
                    switch(resp[i].type){
                        case 'Withdrawl':wit+=resp[i].amount;
                                            break;
                        case 'Cash Payment':cash+=resp[i].amount;
                            break;
                        case 'Credit Payment':credit+=resp[i].amount;
                            break;
                        default: 
                        if(resp[i].type!="Deposit")
                        stock+=resp[i].amount;
                        break;
                        }
                }
            res.render("transaction", {
                transactions: resp,
                total: total,
                cash:cash,
                credit:credit,
                wit: wit,
                stock: stock,
            });
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