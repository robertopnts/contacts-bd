import {AppError} from "../../errors"
import { TcontactUpdateReq } from "../../interfaces/contact.interfaces"
import { contactSchema } from "../../schemas/contactSchema"
import prisma from "../../utils/db.server"

const updateContactService = async (payload: TcontactUpdateReq, contactId: string, userId: string) => {
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

  const updatedContact = await prisma.contato.update({
    where: {
      id: contactId
    },
    data: {
      ...payload
    }
  })

  const validatedUpdatedContact = contactSchema.parse(updatedContact)

  return validatedUpdatedContact
}

export default updateContactService