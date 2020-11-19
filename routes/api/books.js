const router = require("express").Router();
const bookController = require("../../controllers/bookController");

// Routes for displaying books and saving new books
router.route("/")
  // view saved books
  .get(bookController.findAll)
  // add new saved book
  .post(bookController.create);

// Routes for finding saved books and removing books from saved list
router.route("/:id")
  // delete book by id
  .delete(bookController.remove);

module.exports = router;
