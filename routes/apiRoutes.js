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
        transactiondata = {
            type: req.body.type,
            memo: req.body.memo,
            amount: req.body.amount
        }
        db.User.findAll({ where: { name: req.body.user } }).then(function(res1) {
            if (res1.length != 1) {
                db.User.create({ name: req.body.user }).then(function(resp) {
                    console.log()
                    transactiondata.UserId = resp.dataValues.id;
                    db.Transaction.create(transactiondata).then(function(transactions) {
                        res.json(transactions);
                    });
                })
            } else
                transactiondata.UserId = res1[0].id
            console.log(transactiondata.UserId)
            db.Transaction.create(transactiondata).then(function(transactions) {
                res.json(transactions);
            });
        })

    });

    app.post("/api/users", function(req, res) {
        db.User.create(req.body).then(function(users) {
            res.json(users);
        });
    });

    app.get("/api/users/:id", function(req, res) {
        db.User.findAll({ where: { name: req.params.id } }).then(function(users) {
            res.json(users);
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