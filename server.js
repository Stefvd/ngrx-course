// server.js
const express = require("express");
const bodyParser = require("body-parser");
const consultants = require("./consultants");

const app = express();
const port = process.env.PORT || 4000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/consultants", (req, res) => {
  res.json(consultants);
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
