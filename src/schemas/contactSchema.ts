import { z } from "zod";
import { userSchema, userSchemaRes } from "./userSchema";

export const contactSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string().email(),
  phone: z.string(),
  createdAt: z.date(),
  userId: z.string()
})

export const contactListSchema = z
  .array(contactSchema)

export const contactSchemaReq = contactSchema
  .omit({
    id: true,
    createdAt: true,
    userId: true
  })

export const contactWithUserSchemaReq = contactSchema
  .omit({
    id: true,
    createdAt: true
  })

export const contactSchemaUpdateReq = contactSchemaReq
  .partial()