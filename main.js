"use strict";
/* -------------------------------------------------------
    EXPRESSJS - ERROR MANAGEMENT
------------------------------------------------------- */

const express = require("express");
const app = express();

const PORT = process.env.PORT || 8000;
const HOST = process.env.HOST;

/* ------------------------------------------------------- *
!olması gereken
app.get("/user/:id", function (req, res) {
  res.status(200).send({ userId: 1, userName: "John" });
}); // route handler

/* ------------------------------------------------------- *
! iki farklı send()
app.get("/user/:id", function (req, res) {
    res.status(200).send({ userId: 1, userName: "John" }); //! sadece bunu yansıtır. 
    res.status(200).send({ userId: 2, userName: "Jack" }); //! burada hata verir
  });

/* ------------------------------------------------------- *
! default hata çıktısı
app.get("/user/:id?", function (req, res) {
  req.params.id.toString();
  res.send({ userId: 2, userName: "John" });
});

/* ------------------------------------------------------- *
! throw
app.get("/user/:id?", function (req, res) {
  throw Error("Hata oluştu");
  res.send({ userId: 2, userName: "John" });
});
/* ------------------------------------------------------- *

app.get("/user/:id?", function (req, res) {
  try {
    req.params.id.toString();
    res.send({ userId: 2, userName: "John" });
  } catch (error) {
    // throw Error("id must be string");
    // res.status(400).send("id must be string");
    res.status(400).send({ isError: true, message: "id must be string" }); // tercih edilen yöntem
  }
});
/* ------------------------------------------------------- *
app.get("/user/:id?", function (req, res, next) {
  throw Error("Hata oluştu");
  res.send({ userId: 2, userName: "John" });
});

/* ------------------------------------------------------- *
//! status code gönderme
app.get("/user/:id?", function (req, res, next) {
//   req.statusCode = 400;
  res.statusCode = 400;
  throw new Error("Hata oluştu")
//   const error = new Error("Hata oluştu");
//   error.statusCode = 400;
//   throw error;
  res.send({ userId: 2, userName: "John" });
});

/* ------------------------------------------------------- */
//!try catch ile errorHandler
app.get("/user/:id?", function (req, res, next) {
//   res.statusCode = 400;
  try {
    req.params.id.toString();
    res.send({ userId: 2, userName: "John" });
  } catch (error) {
    error.statusCode = 400;
    next(error);
  }
});

/* ------------------------------------------------------- */
class CustomError extends Error {
  name = "Custom Error"
  statusCode=500
  constructor(message,status){
    super(message)
    this.statusCode=status
  }
}
throw new CustomError("Hata oluştu", 400)
/* ------------------------------------------------------- */


app.use("*", function (req, res) {
  res.status(404).send("The route is not found");
});
const errorHandlerFunction = (err, req, res, next) => {
  // console.log(req.statusCode) // bu çok kullanılmaz
  // console.log(res.statusCode)
  // console.log(err.statusCode)

  const statusCode = err.statusCode || res.statusCode || 500;
  res.status(statusCode).send({ isError: true, message: err.message });
};
app.use(errorHandlerFunction);
app.listen(PORT, () => console.log("Running: http://127.0.0.1"));
