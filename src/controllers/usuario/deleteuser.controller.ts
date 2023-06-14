import { Request, Response } from "express";
import deleteUserService from "../../services/usuario/deleteUser.service";

const deleteUserController = async (req: Request, res: Response) => {
  const userId = req.user.id
  await deleteUserService(userId)

  return res.status(204).send("User deleted")
}

export default deleteUserController