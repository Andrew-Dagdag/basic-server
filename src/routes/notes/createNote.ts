import { Request, Response, NextFunction } from "express"
import { INotes } from "../../types/notes"
import { ResponseData } from "../../types/responseData"
import * as noteUtils from "../../server/noteUtils"

export const createNote = (req: Request, res: Response, next: NextFunction) => {
  const dummyData: INotes = {
    text: 'Some dummy note',
    dateCreated: Date.now(),
    author: 'Andorudoru'
  }

  noteUtils
    .createNote(dummyData)
    .then((note: INotes) => {
      const response: ResponseData = {
        statusCode: 200,
        data: note
      }
      res.locals.responseData = response
    })
    .catch(err => {
      console.log(`\nError: ${JSON.stringify(err)}`)
    })
    .finally(() => {
      return next();
    })  
}
