import { Request, Response } from "express"
import createUserService from "../../services/usuario/createUser.service"
import { TUserReq, TUserRes } from "../../interfaces/user.interfaces"

const createUserController = async (req: Request, res: Response): Promise<Response> => {
  const data:TUserReq = req.body
  const user:TUserRes = await createUserService(data)

  return res.status(201).send(user)
}

export default createUserController