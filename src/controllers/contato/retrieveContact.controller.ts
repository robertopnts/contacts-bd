import { Request, Response } from "express";
import { TContactRes } from "../../interfaces/contact.interfaces";
import retrieveContactService from "../../services/contatos/retrieveContact.service";

const retrieveContactController = async (req: Request, res: Response) => {
  const contactId: string = req.params.id
  const userId: string = req.user.id
  const retrievedContact: TContactRes = await retrieveContactService(contactId, userId)

  return res.status(200).send(retrievedContact)
}

export default retrieveContactController