import { Request, Response } from "express";
import { TcontactUpdateReq } from "../../interfaces/contact.interfaces";
import updateContactService from "../../services/contatos/updateContact.service";

const updateContactController = async (req: Request, res: Response): Promise<Response> => {
  const updateContactData: TcontactUpdateReq = req.body
  const contactId: string = req.params.id
  const userId: string = req.user.id
  const updatedContact = await updateContactService(updateContactData, contactId, userId) 

  return res.status(200).send(updatedContact)
}

export default updateContactController