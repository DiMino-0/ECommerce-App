const express = require("express");
const productsController = require("./controllers/products");
const app = express();
const PORT = 3000;

app
  .get("/", (req, res) => {
    res.send("Hello World!");
  })
  .use("/products", productsController)
  .listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
