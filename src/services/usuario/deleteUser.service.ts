import prisma from "../../utils/db.server"

const deleteUserService = async (id: string): Promise<void> => {
  await prisma.usuario.delete({
    where: {
      id: id
    }
  })
}

export default deleteUserService