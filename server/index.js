/*
This is a comment! 
*/
// Load the http module to create an http server.
const express = require("express");
const app = express();
const PORT = 3000;

//Only reply to messages to the root URL
app.get("/", (req, res) => {
  res.send("Hello New Paltz! Changes!\n");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
