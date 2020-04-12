const isEmpty = require('lodash.isempty');
const Bootcamp = require('../models/Bootcamp');
const asyncHandler = require('../middleware/async');
const ErrorResponse = require('../utils/errorResponse');
/* 
  @desc     -> Get all bootcamps
  @access   -> Public 
*/
exports.getBootcamps = asyncHandler(async (req, res, next) => {
  const bootcamps = await Bootcamp.find();
  res
    .status(200)
    .json({ success: true, count: bootcamps.length, data: bootcamps });
});

/* 
  @desc     -> Get single bootcamp
  @access   -> Public
  @params   -> Id of the bootcamp 
*/
exports.getBootcamp = asyncHandler(async (req, res, next) => {
  const bootcamp = await Bootcamp.findById(req.params.id);
  if (isEmpty(bootcamp)) {
    return next(
      new ErrorResponse(`Bootcamp not found for id ${req.params.id}`, 404)
    );
  }
  res.status(200).json({ success: true, data: bootcamp });
});

/* 
  @desc     -> Create new bootcamp
  @access   -> Private
*/
exports.createBootcamp = asyncHandler(async (req, res, next) => {
  const bootcamp = await Bootcamp.create(req.body);
  res.status(201).json({
    success: true,
    data: bootcamp
  });
});

/* 
  @desc     -> Update bootcamp
  @access   -> Private
  @params   -> Id of the bootcamp 
*/
exports.updateBootcamp = asyncHandler(async (req, res, next) => {
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
});

/* 
  @desc     -> Delete bootcamp
  @access   -> Private
  @params   -> Id of the bootcamp 
*/
exports.deleteBootcamp = asyncHandler(async (req, res, next) => {
  const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id);
  if (isEmpty(bootcamp)) {
    new ErrorResponse(`Bootcamp not found for id ${req.params.id}`, 404);
  }
  res.status(200).json({
    success: true,
    data: {}
  });
});
