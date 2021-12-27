const { HANDEL_ERROR,SUCCESS_MESSAGE} = require("../constants/app.Constants");
const Boom = require("boom");
const bookDetails = require("../models/bookdetails");
const highlight = require("../models/highlight");

exports.createHighlight = async (req, res, next) => {
    try {
        const { bookdetailsId, selection, page_no } = req.body
        const highLights = await highlight.create({
            bookdetailsId,
            selection,
            page_no
        })
        await bookDetails.findByIdAndUpdate(bookdetailsId, { $push: { highLight: highLights._id } })
        res.send({
            success: true,
            highLights
        })
    } catch (error) {
        return next(Boom.badRequest(HANDEL_ERROR.SOMETHING_WENT_WRONG, error));
    }
}

exports.getHighlight = async (req, res, next) => {
    try { 
        let {id,page_no} = req.query;
        const highLight = await highlight.find({bookdetailsId:id, page_no:page_no}).populate("bookdetailsId");
        res.status(200).json({
            success: true,
            highLight,
        });
    } catch (error) {
        return next(Boom.badRequest(HANDEL_ERROR.SOMETHING_WENT_WRONG, error));
    }
}
exports.getHighlightId = async (req,res,next) =>{
    try {
        const _id = req.params.id;
        const highLight = await highlight.findOne({_id}).populate("bookdetailsId"); 
        res.status(200).json({
            success: true,
             highLight,
        });
    } catch (error) {
        return next(Boom.badRequest(HANDEL_ERROR.SOMETHING_WENT_WRONG, error));
    }
}
exports.editHighlight = async (req,res,next) =>{
    try {
        const {selection} =req.body;
        const edithighLight = await highlight.findByIdAndUpdate(req.params.id,{
            selection: selection,
        })
        res.status(200).json({
            success: true,
            message: SUCCESS_MESSAGE.SUCCESS_FULLY_EDIT_HIGHLIGHT,
            edithighLight,
        });
    } catch (error) {
        return next(Boom.badRequest(HANDEL_ERROR.SOMETHING_WENT_WRONG, error));
    }
}
exports.deleteHighlight = async(req,res,next) =>{
    try {
        const deletehighLight = await highlight.findByIdAndDelete(req.params.id);
        res.status(200).json({
            success: true,
            message: SUCCESS_MESSAGE.SUCCESS_FULLY_DELETE_HIGHLIGHT,
            deletehighLight,
        });
    } catch (error) {
        return next(Boom.badRequest(HANDEL_ERROR.SOMETHING_WENT_WRONG, error));
    }
}

