import { Request, Response, NextFunction } from "express"
import { INotes } from "../../types/notes"
import { ResponseData } from "../../types/responseData"
import * as noteUtils from "../../server/noteUtils"

export const createNote = (req: Request, res: Response, next: NextFunction) => {
  let response: ResponseData = {}
  if (req.body.text == null) {
    response = {
      statusCode: 400,
      data: 'No text received'
    };
    res.locals.responseData = response;
    return next()
  }

  const newNote: INotes = {
    text: req.body.text,
    dateCreated: Date.now()
  }

  if (req.body.author != null) {
    newNote.author = req.body.author
  }

  noteUtils
    .createNote(newNote)
    .then((note: INotes) => {
      response = {
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
