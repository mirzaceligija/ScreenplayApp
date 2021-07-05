import config from "config";
import { get } from "lodash";
import { Request, Response, NextFunction } from "express";
import { validatePassword } from "../services/user.service";
import {
  createSession,
  createAccessToken,
  updateSession,
  findSessions,
} from "../services/session.service";
import { sign } from "../utils/jwt.utils";

export async function createUserSessionHandler(req: Request, res: Response,  next: NextFunction) {
  try {
    const user = await validatePassword(req.body);
  
    if (!user) {
      return res.status(401).send("Invalid username or password");
    }
  
    // Create a session, access token & refresh token
    const session = await createSession(user._id, req.get("user-agent") || "");
  
    const accessToken = createAccessToken({
      user,
      session,
    });
  
    const refreshToken = sign(session, {
      expiresIn: config.get("refreshTokenTtl"), // 1 year
    });
  
    // send refresh & access token back
    return res.send({ accessToken, refreshToken });
  } catch (e) {
    next(e)
  }
}
  
export async function invalidateUserSessionHandler(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try{
      const sessionId = get(req, "user.session");
      await updateSession({ _id: sessionId }, { valid: false });
    
      return res.sendStatus(200);
    } catch (e) {
      next(e);
    }
}
  
export async function getUserSessionsHandler(req: Request, res: Response, next: NextFunction) {
  try {
    const userId = get(req, "user._id");
    const sessions = await findSessions({ user: userId, valid: true });
  
    return res.send(sessions);
  } catch (e) {
    next(e);
  }
}