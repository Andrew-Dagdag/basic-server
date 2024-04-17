import { Request, Response, NextFunction } from "express"

export const logger = (req: Request, res: Response, next: NextFunction) => {
    console.log(`\nReceived a request at ${Date.now()}`);
    console.log(`Request body: ${JSON.stringify(req.body)}`);
    console.log(`Request query: ${JSON.stringify(req.query)}`);
    console.log(`Request headers: ${JSON.stringify(req.headers)}`);
    next();
}
