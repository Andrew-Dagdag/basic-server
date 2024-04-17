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
router.post('/deleteNote', 
  authenticationHandler.authUser,
  noteHandler.deleteNote
);
router.get('/listNotes', noteHandler.listNotes);

export { router };
