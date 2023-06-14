import { Router } from "express";
import ensureBodyIsValidMiddleware from "../middlewares/ensureBodyIsValid.middleware";
import { contactSchemaReq, contactSchemaUpdateReq } from "../schemas/contactSchema";
import ensureIsAuthMiddleware from "../middlewares/ensureIsAuth.middleware";
import createContactController from "../controllers/contato/createContact.controller";
import listContactsFromUserController from "../controllers/contato/listContactsFromUser.controller";
import retrieveContactController from "../controllers/contato/retrieveContact.controller";
import updateContactController from "../controllers/contato/updateContact.controller";
import deleteContactController from "../controllers/contato/deleteContact.controller";

const contactRoutes = Router()

contactRoutes.post("",
                  ensureBodyIsValidMiddleware(contactSchemaReq),
                  ensureIsAuthMiddleware,
                  createContactController
)
contactRoutes.get("",
                  ensureIsAuthMiddleware,
                  listContactsFromUserController
)
contactRoutes.get("/:id",
                  ensureIsAuthMiddleware,
                  retrieveContactController
)
contactRoutes.patch("/:id",
                  ensureBodyIsValidMiddleware(contactSchemaUpdateReq),
                  ensureIsAuthMiddleware,
                  updateContactController
)
contactRoutes.delete("/:id",
                  ensureIsAuthMiddleware,
                  deleteContactController
)

export default contactRoutes