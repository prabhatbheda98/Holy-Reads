const {HANDEL_ERROR} = require("../constants/app.Constants");
const Boom = require("boom");
const category = require("../models/category");

exports.createcategory = async(req,res,next) =>{
    try {
        const {name,img} = req.body;
        const categorytype = await category.create({
            name,
            img
        })
        res.status(200).json({
            success: true,
            categorytype,
          });  
    } catch (error) {
        return next(Boom.badRequest(HANDEL_ERROR.SOMETHING_WENT_WRONG, error));
    }
}
exports.getcategory = async(req,res,next) =>{
    try {
        const categorylist = await category.find({}).populate('book');
        res.status(200).json({
            success: true,
            categorylist,
          });
        
    } catch (error) {
        return next(Boom.badRequest(HANDEL_ERROR.SOMETHING_WENT_WRONG, error));
    }
}