import { Request, Response } from "express";
import listUsersService from "../../services/usuario/listUsers.service";

const listUsersController = async (req: Request, res: Response): Promise<Response> => {
  const users = await listUsersService()

  return res.status(200).send(users)
}

export default listUsersController