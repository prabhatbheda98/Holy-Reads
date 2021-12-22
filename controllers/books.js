const {HANDEL_ERROR,SUCCESS_MESSAGE} = require("../constants/app.Constants");
const Boom = require("boom");
const books = require("../models/books")
const category = require("../models/category");

 
exports.createbooks =async(req,res,next) =>{
    try {
        const {img,categoryId,title,auother_name,thought,overview,about_the_author} = req.body;

        const Books = await books.create({
            img,
            categoryId,
            title,
            auother_name,
            thought,
            overview,
            about_the_author
        });
        await category.findByIdAndUpdate(categoryId, { $push: { book: Books._id } });
        res.send({
            success:true,
            Books
        })
        
    } catch (error) {
        return next(Boom.badRequest(HANDEL_ERROR.SOMETHING_WENT_WRONG, error));
    }
}
exports.getbooks = async(req,res,next) =>{
    try {
        let { page,size } = req.query;
        if(!page){
            page = 1;
        }
        if(!size){
            size=8;
        }
        const limit = parseInt(size);
        const skip = (page - 1)*size

        const Booklist = await books.find({}).limit(limit).skip(skip).populate('categoryId');
        res.status(200).json({
            success: true,
            page,
            size,
            Booklist,
          });
    } catch (error) {
        console.log(error);
        return next(Boom.badRequest(HANDEL_ERROR.SOMETHING_WENT_WRONG, error));
    }
}
exports.getbook = async (req,res,next) =>{
    try {
        const _id = req.params.id;
        const Booklists = await books.findOne({_id}).populate('categoryId');
        res.status(200).json({
            success: true,
            Booklists,
          });       
    } catch (error) {
        return next(Boom.badRequest(HANDEL_ERROR.SOMETHING_WENT_WRONG, error));
    }
}
exports.editbook = async (req,res,next) =>{
    try {
        const {img,title,auother_name,thought,overview,about_the_author} = req.body;
        const editBook = await books.findByIdAndUpdate(req.params.id,{
            img: img,
            title: title,
            auother_name:auother_name,
            thought: thought,
            overview: overview,
            about_the_author: about_the_author
        })
        res.status(200).json({
            success: true,
            message: SUCCESS_MESSAGE.SUCCESS_FULLY_EDIT_BOOK,
            editBook,
          });
        
    } catch (error) {
        return next(Boom.badRequest(HANDEL_ERROR.SOMETHING_WENT_WRONG, error));
    }
}
exports.deletebook = async (req,res,next) =>{
    try {
        const deleteBook = await books.findByIdAndUpdate(req.params.id);
        res.status(200).json({
            success: true,
            message: SUCCESS_MESSAGE.SUCCESS_FULLY_DELETE_TOPIC,
            deleteBook,
          });
    } catch (error) {
        return next(Boom.badRequest(HANDEL_ERROR.SOMETHING_WENT_WRONG, error));
    }
}