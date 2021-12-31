const  mongoose = require("mongoose")

const highlightSchema = new mongoose.Schema({
    bookdetailsId :{
        type: mongoose.Schema.Types.ObjectId,
        ref: "bookdetails",
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
    }
})
const highlight = mongoose.model("highlight",highlightSchema);

module.exports =highlight;
