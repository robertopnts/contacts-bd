import { Request, Response } from "express";
import createLoginService from "../../services/sessao/login.service";

const loginController = async (req: Request, res: Response): Promise<Response> => {
  const userData = req.body
  const token = await createLoginService(userData)
  return res.status(200).json(token)
}

export default loginController