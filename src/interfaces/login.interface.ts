import { z } from "zod";
import { loginSchemaReq, loginSchemaRes } from "../schemas/loginSchema";

export type TLoginReq = z.infer<typeof loginSchemaReq>
export type TLoginRes = z.infer<typeof loginSchemaRes>