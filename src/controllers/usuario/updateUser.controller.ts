import { Request, Response } from "express";
import { TUserUpdateReq } from "../../interfaces/user.interfaces";
import updateUserService from "../../services/usuario/updateUser.service";

const updateUserController = async (req: Request, res: Response): Promise<Response> => {
  const data: TUserUpdateReq = req.body
  const userId: string = req.user.id
  const updatedUser = await updateUserService(data, userId)

  return res.status(200).send(updatedUser)
}

export default updateUserController