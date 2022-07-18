import { Request, Response } from 'express';

import { DTOAuthentication } from '@wordy-nx-workspace/shared/data-access/data-transfer-objects';
import { decryptString } from '@wordy-nx-workspace/shared/util/cryptology';

export const login = (req: Request<unknown, unknown, DTOAuthentication>, res: Response) => {
  const data: DTOAuthentication = {
    email: decryptString(req.body.email),
    password: decryptString(req.body.password),
  };
  res.status(200).json({ message: 'Here login route', data });
};

export const signup = (req: Request<unknown, unknown, DTOAuthentication>, res: Response) => {
  const data: DTOAuthentication = {
    email: decryptString(req.body.email),
    fullName: decryptString(req.body.fullName),
    password: decryptString(req.body.password),
    confirmPassword: decryptString(req.body.confirmPassword)
  };
  res.status(200).json({ message: 'Here signup route', data });
};

export const logout = (req: Request, res: Response) => {
  res.status(200).json({ message: 'Here logout route' });
};
