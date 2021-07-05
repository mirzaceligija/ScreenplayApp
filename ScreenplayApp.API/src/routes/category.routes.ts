import { Router } from 'express';
import { getCategoriesHandler } from '../controllers/screenplay.controller';

const router = Router();

// GET /api/v1/categories
router.get('', getCategoriesHandler);


module.exports = router;