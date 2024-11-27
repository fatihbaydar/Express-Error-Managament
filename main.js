"use strict";
/* -------------------------------------------------------
    EXPRESSJS - ERROR MANAGEMENT
------------------------------------------------------- */

const express = require("express");
const app = express();

const PORT = process.env.PORT || 8000;
const HOST = process.env.HOST;

app.get("/user/:id", function (req, res) {
  res.status(200).send({ userId: 1, userName: "John" });
}); // route handler

app.listen(PORT, () => console.log("Running: http://127.0.0.1"));
