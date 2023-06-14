import {AppError} from "../../errors";
import { TContactReq, TContactRes, TContactWithUserReq } from "../../interfaces/contact.interfaces";
import { contactSchema } from "../../schemas/contactSchema";
import prisma from "../../utils/db.server";

const createContactService = async (payload: TContactReq, id: string): Promise<TContactRes> => {
  const user = await prisma.usuario.findUnique({
    where: {
      id: id
    }
  })

  if(!user) {
    throw new AppError("You must be logged to create a contact!", 401)
  }

  const newContact:TContactRes = await prisma.contato.create({
    data: {
      email: payload.email,
      name: payload.name,
      phone:payload.phone,
      userId: id
    }
  })

  const validatedContact = contactSchema.parse(newContact)

  return validatedContact
}

export default createContactService