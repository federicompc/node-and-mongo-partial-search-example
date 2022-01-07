const express = require("express");
const Routes = require("./routes/routes");
const app = express();

app.use(express.json());
app.use("/api", Routes);

module.exports = app;
