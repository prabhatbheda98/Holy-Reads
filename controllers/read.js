const { HANDEL_ERROR, SUCCESS_MESSAGE } = require("../constants/app.Constants");
const Boom = require("boom");
const read = require("../models/read");
const books = require("../models/books");

exports.createRead = async (req,res,next) =>{
    try {
        const {bookId} = req.body;
        const reads =await read.create({
            bookId
        })
        await books.findByIdAndUpdate(bookId,{$push:{Read :reads._id}})
        res.send({
            success:true,
            reads
        })
    } catch (error) {
        return next(Boom.badRequest(HANDEL_ERROR.SOMETHING_WENT_WRONG, error));
    }
}
exports.getRead = async (req,res,next) =>{
    try {
        const Reads = await read.find({completed:false}).populate("bookId");
        res.status(200).json({
            success: true,
            Reads,
          });
    } catch (error) {
        return next(Boom.badRequest(HANDEL_ERROR.SOMETHING_WENT_WRONG, error));
    }
}
// exports.getReadById = async(req,res,next) =>{
//     try {
//         const _id =req.params.id;
//         const Read = await read.findOne({_id}).populate("bookId"); 
//         res.status(200).json({
//             success: true,
//             Read,
//         });
//     } catch (error) {
//         return next(Boom.badRequest(HANDEL_ERROR.SOMETHING_WENT_WRONG, error));
//     } 
// }
exports.getCompleted = async(req,res,next) =>{
    try {
        const complete = await read.find({completed:true}).populate("bookId");
        res.status(200).json({
            success: true,
            complete,
          });
    } catch (error) {
        return next(Boom.badRequest(HANDEL_ERROR.SOMETHING_WENT_WRONG, error));
    }
}

exports.editcompleted =async(req,res,next) =>{  
    try {
        
        const {completed} = req.body;
        const editcomplete = await read.findByIdAndUpdate(req.query.id,{
            completed,
        })  
        res.status(200).json({
            success: true,
            message: SUCCESS_MESSAGE.SAVE_COMPLETE,
            editcomplete,
        });
    } catch (error) { 
        return next(Boom.badRequest(HANDEL_ERROR.SOMETHING_WENT_WRONG, error)); 
    }
}