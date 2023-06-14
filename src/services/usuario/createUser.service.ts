import { TUser, TUserReq, TUserRes } from "../../interfaces/user.interfaces"
import { userSchemaRes } from "../../schemas/userSchema"
import prisma from "../../utils/db.server"
import * as bcrypt from "bcryptjs"

const createUserService = async (payload: TUserReq): Promise<TUserRes> => {
  const password = await bcrypt.hash(payload.password, 10)

  const newUser: TUser = await prisma.usuario.create({
    data: {
      name: payload.name,
      password: password,
      email: payload.email,
      phone: payload.phone
    }
  })

  const user: TUserRes = userSchemaRes.parse(newUser)

  return user
}

export default createUserService