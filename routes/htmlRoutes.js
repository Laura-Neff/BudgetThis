var db = require("../models");
var axios = require("axios");

// var path = require("path");

module.exports = function(app) {
    // Load index page

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};

var queryUrl = "https://financialmodelingprep.com/api/v3/stock/gainers";

axios
  .get(queryUrl)
  .then(function(response) {
    // console.log(response);
    for (i = 0; i < response.data.mostGainerStock.length; i++) {
      // response.data[i];
      console.log(response.data.mostGainerStock[i]);
    }
  })
  .catch(function(error) {
    if (error.response) {
      console.log(error.response);
    }
  });
