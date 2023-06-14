import { Request, Response } from "express";
import listContactsFromUserService from "../../services/contatos/listContactsFromUser.service";
import { TContactRes } from "../../interfaces/contact.interfaces";

const listContactsFromUserController = async (req: Request, res: Response): Promise<Response> => {
  const userId: string = req.user.id
  const contactList: TContactRes[] = await listContactsFromUserService(userId)

  return res.status(200).send(contactList)
}

export default listContactsFromUserController