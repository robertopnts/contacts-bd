import {AppError} from "../../errors"
import prisma from "../../utils/db.server"

const deleteContactService = async (contactId: string, userId: string): Promise<void> => {
  const foundContact = await prisma.contato.findUnique({
    where: {
      id: contactId
    }
  })

  if(!foundContact) {
    throw new AppError("Contact not found", 404)
  }

  if(foundContact.userId != userId) {
    throw new AppError("You don't have permission", 401)
  }

  await prisma.contato.delete({
    where: {
      id: contactId
    }
  })
}

export default deleteContactService