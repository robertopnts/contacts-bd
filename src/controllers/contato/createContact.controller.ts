import { Request, Response } from "express";
import { TContactReq, TContactRes } from "../../interfaces/contact.interfaces";
import createContactService from "../../services/contatos/createContact.service";

const createContactController = async (req: Request, res: Response): Promise<Response> => {
  const userData: TContactReq = req.body
  const userId: string = req.user.id
  const newContact: TContactRes = await createContactService(userData, userId)

  return res.status(201).send(newContact)
}

export default createContactController