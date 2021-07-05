import { Request, Response, NextFunction } from "express";
import { createActor } from "../services/actor.service";


export async function createActorHandler(req: Request, res: Response, next: NextFunction) {
    
    try {
        const body = req.body;
        const actor = await createActor({ ...body});

        return res.send(actor);
    } catch (e) {
        next(e);
    }
  }