const mongoose = require("mongoose")

const bookdetailsSchema = new mongoose.Schema({
    bookId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "books",
    },
    heading:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    page_no:{
        type: Number,
        required:true
    },
    highLight:[
        {
            type: mongoose.Schema.Types.ObjectId,
             ref: "highlight",  
        }
    ]

    // listByDetail:[
    //     {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "listbydetail",   
    //     }
    // ]
})
const bookdetails = mongoose.model("bookdetails",bookdetailsSchema);

module.exports = bookdetails;