import { Usuario } from "@prisma/client"
import prisma from "../../utils/db.server"
import { AppError } from "../../errors"
import { TUserRes } from "../../interfaces/user.interfaces"
import { userSchemaRes } from "../../schemas/userSchema"

const retrieveUserService = async (id: string) => {
  const user: Usuario | null = await prisma.usuario.findUnique({
    where: {
      id: id
    }
  })

  if (!user) {
    throw new AppError("User not found")
  }

  const validatedUser: TUserRes = userSchemaRes.parse(user)

  return validatedUser
}

export default retrieveUserService