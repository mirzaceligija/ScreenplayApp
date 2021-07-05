import { Router } from 'express';
import validateRequest from '../middlewares/validateRequest';

import { createActorSchema } from './../schemas/actor.schema';
import { createActorHandler } from '../controllers/actor.controller';


const router = Router();

// POST /api/v1/screenplays/
router.post('', validateRequest(createActorSchema), createActorHandler)

module.exports = router;