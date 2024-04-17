import { Request, Response } from "express"

export const response = (req: Request, res: Response) => {
    console.log(`\nResponse to request is ${JSON.stringify(res.locals)}`)
    if (res.locals.responseData?.statusCode) {
        const responseData = res.locals.responseData;
        if (responseData.statusCode !== 200) {
            res.statusCode = responseData.statusCode;
        }
        res.send(responseData.data);
    } else {
        res.sendStatus(403);
    }
}
