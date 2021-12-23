const routes = require("express").Router();

// const router = require("./category");
// const router = require("./books");

const category = require("./category");
const books = require("./books");
const bookdetails= require("./bookdetails");
const listbydetail= require("./listbydetail");

routes.use("/category",category);
routes.use("/books",books);
routes.use("/bookdetails",bookdetails);
routes.use("/listbydetail",listbydetail);


module.exports = routes;