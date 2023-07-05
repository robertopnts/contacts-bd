import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors";
import { verify } from "jsonwebtoken";
import "dotenv/config"

const ensureIsAuthMiddleware = (req: Request, res: Response, next: NextFunction): void => {
  const authorization = req.headers.authorization

  if(!authorization) {
    throw new AppError("Missing authorization", 401)
  }

  const token = authorization.split(" ")[1]

  return verify(token, process.env.SECRET_KEY!, (err, decoded: any) => {
    if(err) {
      console.log(decoded)
      console.log(err)
      return res.status(401).json({message: err.message})
    }
    req.user = {
      id: decoded.id,
      email: decoded.email
    }

    return next()
  })
}

export default ensureIsAuthMiddleware