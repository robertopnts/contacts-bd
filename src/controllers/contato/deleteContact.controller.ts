import { Request, Response } from "express";
import deleteContactService from "../../services/contatos/deleteContact.service";

const deleteContactController = async (req: Request, res: Response): Promise<Response> => {
  const contactId = req.params.id
  const userId = req.user.id
  await deleteContactService(contactId, userId)

  return res.status(204).send("Contact deleted")
}

export default deleteContactController