import { Request, Response, NextFunction } from "express"
import { INotes } from "../../types/notes"
import { ListNotesQuery } from "../../types/listNotesQuery"
import { ResponseData } from "../../types/responseData"
import * as noteUtils from "../../server/noteUtils"

export const listNotes = (req: Request, res: Response, next: NextFunction) => {
  noteUtils
    .listNotes(req.query as ListNotesQuery)
    .then((notes: INotes[]) => {
      const response: ResponseData = {
        statusCode: 200,
        data: notes
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
