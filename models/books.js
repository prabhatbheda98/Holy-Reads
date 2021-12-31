const mongoose = require("mongoose")

const booksSchema = new mongoose.Schema({
    img:{
        type:String,
        required:true
    },
    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "category",
      },
    title:{
        type:String,
        required:true
    },
    auother_name:{
        type:String,
        required:true
    },
    thought:{
        type:String,
        required:true
    },
    overview:{
        type:String,
        required:true
    },
    about_the_author:{
        type:String,
        required:true
    },
    bookDetails:[
        {
        type: mongoose.Schema.Types.ObjectId,
        ref: "bookdetails",   
        }
    ],
    Read:[
        {
        type: mongoose.Schema.Types.ObjectId,
        ref:"read"
        }
    ],
    favourite: {
            type: Boolean,
            default:"false"
        }
})
const books = mongoose.model("books", booksSchema);

module.exports = books;