import express from 'express';
import resourceController from './resourceController';

const router = express.Router();

router.get('/', resourceController('controllerMethod'));

export default router;