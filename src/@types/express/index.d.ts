import { JwtPayload } from "jsonwebtoken";
import { TUser, TUserRes } from "../../interfaces/user.interfaces";

declare global {
  namespace Express {
    interface Request {
      user: {
        id: string
        email: string
      }
    }
  }
}