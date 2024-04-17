import { Request, Response, NextFunction } from "express"
import { INotes } from "../../types/notes"
import { ResponseData } from "../../types/responseData"
import * as noteUtils from "../../server/noteUtils"

export const updateNote = (req: Request, res: Response, next: NextFunction) => {
  let response: ResponseData = {}
  if (req.body.text == null) {
    response = {
      statusCode: 400,
      data: 'No text received'
    };
    res.locals.responseData = response;
    return next();
  } else if (req.body.id == null) {
    response = {
      statusCode: 400,
      data: 'No id received'
    }
    res.locals.responseData = response;
    return next();
  }

  noteUtils
    .updateNote({ 
      id: req.body.id, 
      text: req.body.text,
      dateModified: Date.now(),
      author: req.body.author
    })
    .then(updatedNote => {
      let response: ResponseData = {}
      if (updatedNote != null) {
        response = {
          statusCode: 200,
          data: updatedNote
        }
      } else {
        response = {
          statusCode: 404,
          data: 'Note not found'
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
