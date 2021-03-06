const { HANDEL_ERROR, SUCCESS_MESSAGE } = require("../constants/app.Constants");
const Boom = require("boom");
const bookdetails = require("../models/bookdetails");
const books = require("../models/books");

exports.createbookDetails = async (req, res, next) => {
    try {
        const { bookId, heading, description, page_no } = req.body;
        const bookDetail = await bookdetails.create({
            bookId,
            heading,
            description,
            page_no
        })
        await books.findByIdAndUpdate(bookId, { $push: { bookDetails: bookDetail._id } });
        res.send({
            success: true,
            bookDetail
        })
    } catch (error) {
        return next(Boom.badRequest(HANDEL_ERROR.SOMETHING_WENT_WRONG, error));
    }
}
exports.getbookDetails = async (req, res, next) => {
    try {
        const details = await bookdetails.find({}).populate("bookId");
        res.status(200).json({
            success: true,
            details,
        });
    } catch (error) {
        return next(Boom.badRequest(HANDEL_ERROR.SOMETHING_WENT_WRONG, error));
    }
}
exports.getbookDetailById = async (req, res, next) => {
    try {
        const _id = req.params.id;
        const detail = await bookdetails.findOne({ _id }).populate("bookId");
        res.status(200).json({
            success: true,
            detail,
        });
    } catch (error) {
        return next(Boom.badRequest(HANDEL_ERROR.SOMETHING_WENT_WRONG, error));
    }
}
exports.getBookByIdList = async (req, res, next) => {
    try {
        let { id, page } = req.query;
        const detail = await bookdetails.findOne({ bookId: id, page_no: page }).populate("bookId");
        const countBook = await bookdetails.countDocuments({ bookId: id });
        res.status(200).json({
            success: true,
            page:parseInt(page),
            countBook,
            detail,
        });
    } catch (error) {
        console.log(error);
        return next(Boom.badRequest(HANDEL_ERROR.SOMETHING_WENT_WRONG, error));
    }
}

exports.editDetails = async (req, res, next) => {
    try {
        const { heading, description } = req.body;
        const editDeatils = await bookdetails.findByIdAndUpdate(req.params.id, {
            heading: heading,
            description: description,
        })
        res.status(200).json({
            success: true,
            message: SUCCESS_MESSAGE.SUCCESS_FULLY_EDIT_BOOK_DETAILS,
            editDeatils,
        });
    } catch (error) {
        return next(Boom.badRequest(HANDEL_ERROR.SOMETHING_WENT_WRONG, error));
    }
}
exports.deleteDetails = async (req, res, next) => {
    try {
        const deleteDetail = await bookdetails.findByIdAndDelete(req.params.id);
        res.status(200).json({
            success: true,
            message: SUCCESS_MESSAGE.SUCCESS_FULLY_DELETE_BOOK_DETAILS,
            deleteDetail,
        });
    } catch (error) {
        return next(Boom.badRequest(HANDEL_ERROR.SOMETHING_WENT_WRONG, error));
    }
}


