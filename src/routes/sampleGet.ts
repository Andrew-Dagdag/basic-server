import { Request, Response, NextFunction } from "express"
import { ResponseData } from "../types/responseData"

export const sampleGet = (req: Request, res: Response, next: NextFunction) => {
    let responseData: ResponseData = {}
    if (req.query.teapot === `true`) {
        responseData = {
            statusCode: 418,
            data: `I'm a teapot`
        }
    } else {
        responseData = {
            statusCode: 200,
            data: `Congratulations!`
        }
    }

    res.locals.responseData = responseData
    return next();
}
