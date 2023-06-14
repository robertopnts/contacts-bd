import { Contato } from "@prisma/client";
import {AppError} from "../../errors";
import { TContactRes } from "../../interfaces/contact.interfaces";
import { contactSchema } from "../../schemas/contactSchema";
import prisma from "../../utils/db.server";

const retrieveContactService = async (contactId: string, userId: string): Promise<TContactRes> => {
  const contactFound: Contato|null = await prisma.contato.findUnique({
    where: {
      id: contactId
    }
  })

  if(!contactFound) {
    throw new AppError("Contact not found")
  }

  if(contactFound.userId != userId) {
    throw new AppError("You are not allowed to see another person contacts")
  }

  const validatedContact = contactSchema.parse(contactFound)

  return validatedContact
}

export default retrieveContactService