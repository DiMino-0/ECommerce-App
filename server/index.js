const express = require("express");
const productsController = require("./controllers/products");
const app = express();
const PORT = 8000;

app
  .get("/", (req, res) => {
    res.send("Hello World!");
  })
  .use("/api/v1/products", productsController)
  .listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
