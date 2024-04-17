import { Request, Response, NextFunction } from "express"

export const authUser = (req: Request, res: Response, next: NextFunction) => {
  console.log('\nUser authenticated');

  next();
}
