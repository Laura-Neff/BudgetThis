var db = require("../models");
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
    res.render("home", {
      msg: "Welcome home!"
      // examples: dbExamples
    });
  });

  // Load example page and pass in an example by id
  app.get("/history", function(req, res) {
    res.render("transaction", {
      msg: "Transaction history!"
      // examples: dbExamples
    });
  });

  app.get("/new", function(req, res) {
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
