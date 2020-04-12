const ErrorResponse = require('../utils/errorResponse');

const errorHandler = (err, req, res, next) => {
  let error = { ...err };

  error.message = err.message;

  //  Log to console for dev
  console.log(`Error Handler: ${err.stack.red}`);

  //  Mongoose bad ObjectId
  if (err.name === 'CastError') {
    const message = `Resource not found for id ${err.value}`;
    error = new ErrorResponse(message, 404);
  }
  //  Mongoose duplicate
  if (err.code === 11000) {
    const message = `Duplicate field value entered`;
    error = new ErrorResponse(message, 400);
  }
  //  Mongoose validation error
  if (err.name === 'ValidationError') {
    //  Convert object to array and pass to error class
    const message = Object.values(err.errors).map(val => val.message);
    error = new ErrorResponse(message, 400);
  }

  res.status(error.statusCode || 500).json({
    success: false,
    error: error.message || 'Server Error'
  });
};

module.exports = errorHandler;
