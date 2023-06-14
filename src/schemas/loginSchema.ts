import { z } from "zod";

export const loginSchemaReq = z.object({
  email: z.string().email(),
  password: z.string(),
})

export const loginSchemaRes = z.object({
  token: z.string(),
})