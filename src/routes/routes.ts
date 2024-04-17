import express, { Router } from 'express';
const router: Router = express.Router();

// Import routes to use here
import * as noteHandler from './notes/noteHandler';
import * as authenticationHandler from './authentication/authenticationHandler';

// Add custom routes to router
router.post('/createNote', 
  authenticationHandler.authUser,
  noteHandler.createNote
);
router.get('/delete', 
  authenticationHandler.authUser,
  noteHandler.deleteNote
); // TODO: change to delete request, put _id to req.body
router.get('/listNotes', noteHandler.listNotes);

export { router };
