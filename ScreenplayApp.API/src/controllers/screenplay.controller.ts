import { Request, Response, NextFunction } from "express";
import { get } from "lodash";
import {
  findScreenplay,
  findScreenplays,
  findAndUpdate,
  findCategories,

  createScreenplay,
} from "../services/screenplay.service";

export async function getScreenplaysHandler(req: Request, res: Response, next: NextFunction) {
  try {

    const category = req.query.category;
    const page = +req.query.page! || 1;
    const searchTerm = req.query.search! || '';

    const screenplays = await findScreenplays({category}, {}, page, searchTerm.toString());

    if (!screenplays) {
      return res.sendStatus(404);
    }

    return res.send(screenplays);
  } catch (e) {
    next(e);
  }
}

export async function getScreenplayHandler(req: Request, res: Response, next: NextFunction) {
  try {
    const id = get(req, "params.id");

    const screenplay = await findScreenplay({ _id: id });

    if (!screenplay) {
      return res.sendStatus(404);
    }

    return res.send(screenplay);

  } catch (e) {
    next(e);
  }
}

export async function updateScreenplayHandler(req: Request, res: Response, next: NextFunction) {
  try {
    const id = get(req, "params.id");
    const rate = req.body.rate;
    const update = await findScreenplay({ _id: id});

    if(!update) {
      return res.sendStatus(404);
    }

    const calcRate: number = +(((update.rate * update.votes) + rate ) / (update.votes+1) ).toFixed(2);
    update.rate = calcRate;
    update.votes +=1;

    const updatedScreenplay = await findAndUpdate({ _id: id}, update, {new: true});

    return res.send(updatedScreenplay)
  } catch (e) {
    next(e);
  }
}

export async function getCategoriesHandler(req: Request, res: Response, next: NextFunction) {
  try {

    const categories = await findCategories({}, {});

    if (!categories) {
      return res.sendStatus(404);
    }

    return res.send(categories);
  } catch (e) {
    next(e);
  }
}



// CREATE 
export async function createScreenplayHandler(req: Request, res: Response, next: NextFunction) {
  try {
    const body = req.body;
  
    const screenplay = await createScreenplay({ ...body});
  
    return res.send(screenplay);
  } catch (e) {
    next(e);
  }
}
