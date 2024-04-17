import express, { Router } from 'express';
const router: Router = express.Router();

// Import routes to use here
import * as noteHandler from './notes/noteHandler';

// Add custom routes to router
router.get('/createNote', noteHandler.createNote); // TODO: change to post request, add req.body parsing
router.get('/listNotes', noteHandler.listNotes);

export { router };
