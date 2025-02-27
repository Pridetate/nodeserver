const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

require("dotenv").config();

app.use(express.json()); // Middleware to parse JSON requests

app.get("/", (req, res) => {
  res.send("Welcome to the REST API with Kundi!");
});
app.get("/test", (req, res) => {
  res.send(<h3>Test</h3>);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
