
const router = require("express").Router();
const googleController = require("../../controllers/googleController");

// GET route for Google API call
router
  .route("/")
  .get(googleController.findAll);

module.exports = router;