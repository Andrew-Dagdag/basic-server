import { Request, Response } from "express"

export const response = (req: Request, res: Response) => {
    // Can add sanitation code here, remove _id and other sensitive data
    console.log(`\nResponse to request is ${JSON.stringify(res.locals)}`)
    if (res.locals.responseData?.statusCode) {
        const responseData = res.locals.responseData;
        if (responseData.statusCode !== 200) {
            res.status(responseData.statusCode);
        }
        res.send(responseData);
    } else {
        res.sendStatus(403);
    }
}
