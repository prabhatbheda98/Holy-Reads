const routes = require("express").Router();
// const router = require("./category");
// const router = require("./books");
const category = require("./category");
const books = require("./books");
const bookdetails = require("./bookdetails");
const listbydetail = require("./listbydetail");
const highlight = require("./highlight");
const read = require("./read")
const favourite = require("./favourite");
// const completed =require("./completed")




routes.use("/category", category);
routes.use("/books", books);
routes.use("/bookdetails", bookdetails);
routes.use("/listbydetail", listbydetail);
routes.use("/highlight", highlight);
routes.use("/library",read);
routes.use("/library",favourite);
// routes.use("/library",completed);





module.exports = routes;