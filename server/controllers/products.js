const express = require("express");
const router = express.Router();

router
  .get("/", (req, res) => {
    res.send([
      {
        id: 1,
        name: "Product 1",
      },
      {
        id: 2,
        name: "Product 2",
      },
      "banana",
      "orange",
    ]);
  })
  .get("/:id", (req, res) => {
    const { id } = req.params;
    res.send({ id, name: "Product ${id}" });
  })
  .patch("/:id", (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    res.send({ id, name });
  })
  .delete("/:id", (req, res) => {
    const { id } = req.params;
    res.send({ id, message: "Product deleted" });
  });

module.exports = router;
