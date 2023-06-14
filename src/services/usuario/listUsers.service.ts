import { TUserRes } from "../../interfaces/user.interfaces"
import { userListSchemaRes } from "../../schemas/userSchema"
import prisma from "../../utils/db.server"

const listUsersService = async (): Promise<TUserRes[]> => {
  const users = await prisma.usuario.findMany()

  const validatedUser = userListSchemaRes.parse(users)

  return validatedUser
}

export default listUsersService