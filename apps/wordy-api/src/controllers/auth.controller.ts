import { Request, Response } from 'express';

export const loginController = (req: Request, res: Response) => {
  res.status(200).json({ value: 'Here login route' });
};

export const signupController = (req: Request, res: Response) => {
  res.status(200).json({ value: 'Here signup route' });
};

export const logoutController = (req: Request, res: Response) => {
  res.status(200).json({ value: 'Here logout route' });
};
