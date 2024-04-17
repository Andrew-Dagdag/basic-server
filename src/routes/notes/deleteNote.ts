import { Request, Response, NextFunction } from "express"
import { INotes } from "../../types/notes"
import { ListNotesQuery } from "../../types/listNotesQuery"
import { ResponseData } from "../../types/responseData"
import * as noteUtils from "../../server/noteUtils"

export const deleteNote = (req: Request, res: Response, next: NextFunction) => {
  if (req.query.id == null) {
    res.locals.responseData = {
      status: 400,
      data: 'No id found'
    }
    return next();
  }

  noteUtils
    .deleteNote(req.query.id as string)
    .then(deletedNote => {
      let response: ResponseData = {}
      if (deletedNote != null) {
        response = {
          statusCode: 200,
          data: deletedNote
        }
      } else {
        response = {
          statusCode: 404,
          data: 'Document not found'
        }
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
