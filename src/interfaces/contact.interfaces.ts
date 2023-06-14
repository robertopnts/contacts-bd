import { Contato } from "@prisma/client";
import { contactSchema, contactSchemaReq, contactSchemaUpdateReq, contactWithUserSchemaReq } from "../schemas/contactSchema";
import { z } from "zod";

export type TContact = Contato
export type TContactReq = z.infer<typeof contactSchemaReq>
export type TContactWithUserReq = z.infer<typeof contactWithUserSchemaReq>
export type TcontactUpdateReq = z.infer<typeof contactSchemaUpdateReq>
export type TContactRes = z.infer<typeof contactSchema>