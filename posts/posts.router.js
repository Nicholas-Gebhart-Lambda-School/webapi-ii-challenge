const router = require("express").Router();
const db = require("./db.js");
const {
  find,
  findById,
  insert,
  update,
  remove,
  findPostComments,
  findCommentById,
  insertComment
} = db;

router.get("/", (req, res) => {
  find()
    .then(posts => res.status(200).json(posts))
    .catch(() =>
      res
        .status(500)
        .json({ error: "The posts information could not be retrieved." })
    );
});

// If the post with the specified id is not found:

// return HTTP status code 404 (Not Found).
// return the following JSON object: { message: "The post with the specified ID does not exist." }.
// If there's an error in retrieving the post from the database:

// cancel the request.
// respond with HTTP status code 500.
// return the following JSON object: { error: "The post information could not be retrieved." }.

router.get("/:id", (req, res) => {
  const { id } = req.params;
  findById(id)
    .then(post => {
      if (post.length) {
        res.status(200).json(post);
      } else {
        res
          .status(404)
          .json({ message: "The post with the specified ID does not exist." });
      }
    })
    .catch(() => {
      res
        .status(500)
        .json({ error: "The post information could not be retrieved." });
    });
});

module.exports = router;
