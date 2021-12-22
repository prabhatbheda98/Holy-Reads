const routes = require("express").Router();

// const router = require("./category");
// const router = require("./books");

const category = require("./category");
const books = require("./books");

routes.use("/category",category);
routes.use("/books",books);

module.exports = routes;