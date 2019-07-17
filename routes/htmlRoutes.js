var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });

  // transaction.html route
  app.get("/history", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/transaction.html"));
  });

  // input transaction route
  app.get("/new", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/input.html"));
  });

  app.get("*", function(req, res) {
    res.render("404");
  });


};
