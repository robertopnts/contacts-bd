import { compare } from "bcryptjs"
import AppError from "../../errors"
import { TLoginReq, TLoginRes } from "../../interfaces/login.interface"
import prisma from "../../utils/db.server"
import { sign } from "jsonwebtoken"
import { TUser } from "../../interfaces/user.interfaces"
import "dotenv/config"

const createLoginService = async (payload: TLoginReq): Promise<TLoginRes> => {
  const user: TUser|null = await prisma.usuario.findUnique({
    where: {
      email: payload.email,
    }
  })

  if (!user) {
    throw new AppError("Wrong email", 401)
  }

  const validPassword = await compare(payload.password, user.password)

  if(!validPassword) {
    throw new AppError("Wrong email or password", 401)
  }

  const token = sign({id: user.id, email: user.email}, process.env.SECRET_KEY!, {
    expiresIn: process.env.EXPIRES_IN,
    subject: user.id
  })

  return {token}
}

export default createLoginService