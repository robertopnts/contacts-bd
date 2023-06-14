import { Usuario } from "@prisma/client";
import { z } from "zod";
import { userSchemaListContactsRes, userSchemaReq, userSchemaRes, userSchemaUpdateReq } from "../schemas/userSchema";

export type TUser = Usuario
export type TUserReq = z.infer<typeof userSchemaReq>
export type TUserUpdateReq = z.infer<typeof userSchemaUpdateReq>
export type TUserRes = z.infer<typeof userSchemaRes>
export type TUserSchemaListContactsRes = z.infer<typeof userSchemaListContactsRes>
