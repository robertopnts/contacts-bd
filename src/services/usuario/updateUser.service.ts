import { TUserRes, TUserUpdateReq } from "../../interfaces/user.interfaces";
import { userSchemaRes } from "../../schemas/userSchema";
import prisma from "../../utils/db.server";

const updateUserService = async (payload: TUserUpdateReq, id: string): Promise<TUserRes> => {
  const updateUser = await prisma.usuario.update({
    where: {
      id: id
    },
    data: payload
  })

  const validatedUser = userSchemaRes.parse(updateUser)

  return validatedUser
}

export default updateUserService