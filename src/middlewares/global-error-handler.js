import { ApiError } from '../utils/api-error.js';
import { ApiResponse } from '../utils/api-response.js';

export const globalErrorHandler = (err, req, res, next) => {
  let error = err;

  // Handle Mongoose validation error
  if (err.name === 'ValidationError') {
    const messages = Object.values(err.errors).map((e) => e.message);
    error = new ApiError(400, messages.join(', '));
  }

  // Handle Mongoose duplicate key error
  if (err.code === 11000) {
    const field = Object.keys(err.keyValue)[0];
    error = new ApiError(400, `${field} already exists`);
  }

  // Handle Mongoose cast error (invalid ObjectId)
  if (err.name === 'CastError') {
    error = new ApiError(400, 'Invalid ID format');
  }

  // Handle Mongoose strict mode error
  if (err.name === 'StrictModeError') {
    error = new ApiError(400, 'Invalid field(s) provided');
  }

  // Handle JWT errors
  if (err.name === 'JsonWebTokenError') {
    error = new ApiError(401, 'Invalid token');
  }

  if (err.name === 'TokenExpiredError') {
    error = new ApiError(401, 'Token has expired');
  }

  const responseError = error.isOperational
    ? { message: error.message }
    : { message: 'Internal server error' };

  if (process.env.NODE_ENV === 'development') {
    responseError.stack = err.stack;
  }

  return res
    .status(error.statusCode || 500)
    .json(new ApiResponse(error.statusCode || 500, responseError.message));
};

export default globalErrorHandler;