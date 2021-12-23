const {HANDEL_ERROR} = require("../constants/app.Constants");
const Boom = require("boom");
// const listbydetail = require("../models/listbydetail");
const bookDetails = require("../models/bookdetails");

exports.getlistdetail =async (req,res,next) =>{
    try {
        const list =await bookDetails.find({ bookId: req.query.id }).select("heading");
        res.status(200).json({
            success: true,
            list,
        });
    } catch (error) {
        return next(Boom.badRequest(HANDEL_ERROR.SOMETHING_WENT_WRONG, error));
    }
}