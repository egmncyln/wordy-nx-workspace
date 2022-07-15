import { Request, Response } from 'express';

export const login = (req: Request, res: Response) => {
  res.status(200).json({ message: 'Here login route', data: req.body });
};

export const signup = (req: Request, res: Response) => {
  res.status(200).json({ message: 'Here signup route', data: req.body });
};

export const logout = (req: Request, res: Response) => {
  res.status(200).json({ message: 'Here logout route', data: req.body });
};
