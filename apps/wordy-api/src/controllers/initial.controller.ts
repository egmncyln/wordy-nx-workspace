import { Request, Response } from 'express';

export const initialController = (req: Request, res: Response) => {
  res.status(200).send('Welcome to Wordy API');
};
