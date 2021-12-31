const mongoose = require("mongoose")

const readSchema = new mongoose.Schema({
    bookId:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "books",
            require: true
        } 
    ],                
    completed:{
        type:Boolean,
        default:false
    }

})
const read = mongoose.model("read",readSchema);

module.exports = read;