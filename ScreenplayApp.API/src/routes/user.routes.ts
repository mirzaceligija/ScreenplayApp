import { createUserSchema } from './../schemas/user.schema';
import { Router } from 'express';
import { createUserHandler } from '../controllers/user.controller';
import validateRequest from '../middlewares/validateRequest';
const router = Router();

// POST /api/v1/users/
router.post('', validateRequest(createUserSchema), createUserHandler);

module.exports = router;