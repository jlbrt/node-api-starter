import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';
import logger from '../../packages/logger';

export const handleJoiValidationError = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof Joi.ValidationError) {
    return res.status(400).json({
      message: err.message,
    });
  }

  return next(err);
};

export const handleUnhandledError = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  logger.log('Unexpected error caught. Sending 500 response', err);
  return res.status(500).json({ message: '' });
};
