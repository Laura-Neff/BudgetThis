var db = require("../models");
var path = require("path");

module.exports = function(app) {
  // Load index page

  // home route
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

  // app.get("/", function(req, res) {
  //   db.Example.findAll({}).then(function(dbExamples) {
  //     res.render("index", {
  //       msg: "Welcome!",
  //       examples: dbExamples
  //     });
  //   });
  // });

  // // Load example page and pass in an example by id
  // app.get("/example/:id", function(req, res) {
  //   db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
  //     res.render("example", {
  //       example: dbExample
  //     });
  //   });
  // });

  // Render 404 page for any unmatched routes
};
