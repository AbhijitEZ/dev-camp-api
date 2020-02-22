const isEmpty = require('lodash.isempty');
const Bootcamp = require('../models/Bootcamp');
const ErrorResponse = require('../utils/errorResponse');
/* 
  @desc     -> Get all bootcamps
  @access   -> Public 
*/
exports.getBootcamps = async (req, res, next) => {
  try {
    const bootcamps = await Bootcamp.find();
    res
      .status(200)
      .json({ success: true, count: bootcamps.length, data: bootcamps });
  } catch (error) {
    next(error);
  }
};

/* 
  @desc     -> Get single bootcamp
  @access   -> Public
  @params   -> Id of the bootcamp 
*/
exports.getBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findById(req.params.id);
    if (isEmpty(bootcamp)) {
      return next(
        new ErrorResponse(`Bootcamp not found for id ${req.params.id}`, 404)
      );
    }
    res.status(200).json({ success: true, data: bootcamp });
  } catch (error) {
    next(error);
  }
};

/* 
  @desc     -> Create new bootcamp
  @access   -> Private
*/
exports.createBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.create(req.body);
    res.status(201).json({
      success: true,
      data: bootcamp
    });
  } catch (error) {
    next(error);
  }
};

/* 
  @desc     -> Update bootcamp
  @access   -> Private
  @params   -> Id of the bootcamp 
*/
exports.updateBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    if (isEmpty(bootcamp)) {
      new ErrorResponse(`Bootcamp not found for id ${req.params.id}`, 404);
    }
    res.status(200).json({
      success: true,
      data: bootcamp
    });
  } catch (error) {
    next(error);
  }
};

/* 
  @desc     -> Delete bootcamp
  @access   -> Private
  @params   -> Id of the bootcamp 
*/
exports.deleteBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id);
    if (isEmpty(bootcamp)) {
      new ErrorResponse(`Bootcamp not found for id ${req.params.id}`, 404);
    }
    res.status(200).json({
      success: true,
      data: {}
    });
  } catch (error) {
    next(error);
  }
};
