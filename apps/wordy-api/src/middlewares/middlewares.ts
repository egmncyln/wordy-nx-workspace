
import { isNullOrEmptyObject } from '@wordy-nx-workspace/shared/util/null-checking';
import { Request, Response, NextFunction } from 'express';

export const checkRequest = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (['GET', 'OPTIONS'].includes(req.method)) {
    next();
  } else if (!isNullOrEmptyObject(req.body)) {
    next();
  } else {
    res.status(400).json({ message: `Please put an object to your request body` });
  }
};
