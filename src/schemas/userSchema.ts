import {z} from 'zod'
import { contactSchema } from './contactSchema'

export const userSchema = z.object({
  id: z.string(),
  email: z.string().email(),
  password: z.string(),
  name: z.string(),
  phone: z.string(),
  createdAt: z.date(),
})

export const userSchemaReq = userSchema
  .omit({
    id: true,
    createdAt: true,
  })

export const userSchemaUpdateReq = userSchemaReq
  .omit({
    password: true,
  })
  .partial()

export const userSchemaRes = userSchema
  .omit({
    password: true,
  })

export const userListSchemaRes = z
  .array(
    userSchemaRes
  )

export const userSchemaListContactsRes = userSchemaRes
  .extend({
    contacts: z.array(contactSchema)
  })