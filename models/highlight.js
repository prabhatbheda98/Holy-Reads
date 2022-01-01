const  mongoose = require("mongoose")

const highlightSchema = new mongoose.Schema({
    bookdetailsId :{
        type: mongoose.Schema.Types.ObjectId,
        ref: "bookdetails",
    },
    bookId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "books",
    },
    selection :{
        type: String,
        required:true
    },
    page_no:{
        type:Number,
        required:true
    },
    note:{
        type:String,
        required:false
    },
    nH:{
        type:Boolean,
        default:true
    }
    
})
const highlight = mongoose.model("highlight",highlightSchema);

module.exports =highlight;
