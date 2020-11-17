const db = require("../models");

// Defining methods for the bookController
module.exports = {
  // gets all books
  findAll: function(req, res) {
    db.Book.find(req.query)
      // .sort({ date: -1 })
      .then(dbBook => res.json(dbBook))
      .catch(err => res.status(422).json(err));
  },
  // search book by id
  findById: function(req, res) {
    db.Book.findById(req.params.id)
      .then(dbBook => res.json(dbBook))
      .catch(err => res.status(422).json(err));
  },
  // post book
  create: function(req, res) {
    db.Book.create(req.body)
      .then(dbBook => res.json(dbBook))
      .catch(err => res.status(422).json(err));
  },
  // update book
  update: function(req, res) {
    db.Book.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbBook => res.json(dbBook))
      .catch(err => res.status(422).json(err));
  },
  // delete/remove book
  remove: function(req, res) {
    db.Book.findById({ _id: req.params.id })
      .then(dbBook => dbBook.remove())
      .then(dbBook => res.json(dbBook))
      .catch(err => res.status(422).json(err));
  }
};
