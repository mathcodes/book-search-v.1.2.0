const router = require("express").Router();
const booksController = require("../../controllers/booksController");

// Matches with "/api/books"
router.route("/")
  .get(booksController.findAll)
  .post(booksController.create);
// router.route("/")
//     .get( (req, res) => {
//       booksController.findAll(req, res);
//   })
//     // .post(booksController.create);
//     .post( (req, res) => {
//         booksController.create(req, res);
//     }); 

// Matches with "/api/books/:id"
router.route("/:id")
    .get(booksController.findById)
    .put(booksController.update)
    .delete(booksController.remove);

module.exports = router;