import { Request, Response } from "express";
import { TUserRes } from "../../interfaces/user.interfaces";
import retrieveUserService from "../../services/usuario/retrieveUser.service";

const retrieveUserController = async (req: Request, res: Response) => {
  const userId = req.user.id
  const retrievedUser: TUserRes = await retrieveUserService(userId)
}

export default retrieveUserController