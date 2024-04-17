import express, { Router } from 'express';
const router: Router = express.Router();

// Import routes to use here
// import { sampleGet } from './sampleGet';
import { createNote } from './notes/createNote';

// Add custom routes to router
router.get('/testCreate', createNote);
// router.use(sampleGet);

export { router };
