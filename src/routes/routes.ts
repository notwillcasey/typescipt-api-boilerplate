import express from 'express';
import controllers from '../controllers/controllers';

const router = express.Router();

router.get('/route', controllers.getRepos);

export default router;