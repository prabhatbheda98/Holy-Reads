const { HANDEL_ERROR, SUCCESS_MESSAGE } = require("../constants/app.Constants");
const Boom = require("boom");
const books = require("../models/books");

exports.getFavourite = async(req,res,next)=>{
    try {
        const favourites =await books.find({favourite:true}).populate('categoryId');
        res.status(200).json({
            success: true,
            favourites,
          });
    } catch (error) {
        return next(Boom.badRequest(HANDEL_ERROR.SOMETHING_WENT_WRONG, error));
        
    }
}

exports.AddFavourite = async(req,res,next) =>{
    try {
        const addfav = await books.findByIdAndUpdate(req.body.id,{
            favourite:true
        })
        res.status(200).json({
            success: true,
            addfav,
        });
        
    } catch (error) {
        return next(Boom.badRequest(HANDEL_ERROR.SOMETHING_WENT_WRONG, error));  
    }
}

