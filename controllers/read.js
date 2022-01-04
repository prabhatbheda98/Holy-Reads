const { HANDEL_ERROR, SUCCESS_MESSAGE } = require("../constants/app.Constants");
const Boom = require("boom");
const read = require("../models/read");
const books = require("../models/books");

exports.createRead = async (req, res, next) => {
  try {
    const { bookId } = req.body;
    const isExist = await read.findOne({ bookId: bookId });
    if (isExist) {
      return res.send({
        success: false,
        message:'book alrady',
      });
    }
    const reads = await read.create({
      bookId,
    });
    await books.findByIdAndUpdate(bookId, { $push: { Read: reads._id } });
    res.send({
      success: true,
      reads,
    });
  } catch (error) {
    return next(Boom.badRequest(HANDEL_ERROR.SOMETHING_WENT_WRONG, error));
  }
};
exports.getRead = async (req, res, next) => {
  try {
    const Reads = await read.find({ completed: false }).populate({
      path: "bookId",
      select:"_id img title thought auother_name",
      populate: {
        path: "categoryId",
        select:"_id name"
      },
    });
    res.status(200).json({
      success: true,
      Reads,
    });
  } catch (error) {
    return next(Boom.badRequest(HANDEL_ERROR.SOMETHING_WENT_WRONG, error));
  }
};
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
exports.getCompleted = async (req, res, next) => {
  try {
    const complete = await read.find({ completed: true }).populate("bookId");
    res.status(200).json({
      success: true,
      complete,
    });
  } catch (error) {
    return next(Boom.badRequest(HANDEL_ERROR.SOMETHING_WENT_WRONG, error));
  }
};
exports.getReadeByBookId = async (req, res, next) => {
  try {

    const complete = await read.findOne({ bookId: req.query.bookId }).populate("bookId");
    res.status(200).json({
      success: true,
      complete,
    });
  } catch (error) {
    return next(Boom.badRequest(HANDEL_ERROR.SOMETHING_WENT_WRONG, error));
  }
};

exports.editcompleted = async (req, res, next) => {
  try {

    const editcomplete = await read.findOneAndUpdate({bookId:req.body.bookId},{
      completed:true
    });
    res.status(200).json({
      success: true,
      message: SUCCESS_MESSAGE.SAVE_COMPLETE,
      editcomplete,
    });
  } catch (error) {
    return next(Boom.badRequest(HANDEL_ERROR.SOMETHING_WENT_WRONG, error));
  }
};
