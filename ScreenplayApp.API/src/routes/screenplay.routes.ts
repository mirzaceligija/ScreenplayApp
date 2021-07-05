import { updateScreenplaySchema, createScreenplaySchema } from './../schemas/screenplay.schema';
import { Router } from 'express';
import validateRequest from '../middlewares/validateRequest';
import { getScreenplaysHandler, getScreenplayHandler, updateScreenplayHandler, createScreenplayHandler } from '../controllers/screenplay.controller';
const router = Router();

// GET /api/v1/screenplays/
router.get('', getScreenplaysHandler);

// GET /api/v1/screenplays/:id
router.get('/:id', getScreenplayHandler);

// PUT /api/v1/screenplays/:id
router.put('/:id', validateRequest(updateScreenplaySchema), updateScreenplayHandler)


// POST /api/v1/screenplays/
router.post('', validateRequest(createScreenplaySchema), createScreenplayHandler)



module.exports = router;