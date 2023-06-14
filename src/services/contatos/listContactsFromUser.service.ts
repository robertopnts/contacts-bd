import { Contato } from "@prisma/client";
import {AppError} from "../../errors";
import { TContactRes } from "../../interfaces/contact.interfaces";
import { contactListSchema } from "../../schemas/contactSchema";
import prisma from "../../utils/db.server";

const listContactsFromUserService = async (id: string): Promise<TContactRes[]> => {
  const contactList: Contato[] = await prisma.contato.findMany({
    where: {
      userId: id
    }
  })

  if(!contactList) {
    throw new AppError("User contacts not find")
  }

  const validatedContactList = contactListSchema.parse(contactList)

  return validatedContactList
}

export default listContactsFromUserService