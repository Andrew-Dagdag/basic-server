import express, { Router } from 'express';
const router: Router = express.Router();

// Import routes to use here
import { sampleGet } from './sampleGet';

// Add custom routes to router
router.use(sampleGet);

export { router };
