var db = require("../models");

module.exports = function(app) {
  // Get all the transactions and returning them as json
  app.get("/api/transactions", function(req, res) {
    // get all the transactions from the DB
    db.Transaction.findAll({}).then(function(transactions) {
      // send the transactions back as json
      res.json(transactions);
    });
  });

  // Create a new example
  app.post("/api/transactions", function(req, res) {
    db.Transaction.create(req.body).then(function(transactions) {
      res.json(transactions);
    });
  });

  // Delete an example by id
  app.delete("/api/transactions/:id", function(req, res) {
    db.Transaction.destroy({ where: { id: req.params.id } }).then(function(
      transactions
    ) {
      res.json(transactions);
    });
  });
};
