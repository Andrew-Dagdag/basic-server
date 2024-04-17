import { Request, Response, NextFunction } from "express"

export const authUser = (req: Request, res: Response, next: NextFunction) => {
  // Dummy authentication
  console.log('User authenticated');

  next();
}
