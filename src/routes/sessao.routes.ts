import { Router } from "express";
import loginController from "../controllers/sessao/login.controller";
import ensureBodyIsValidMiddleware from "../middlewares/ensureBodyIsValid.middleware";
import { loginSchemaReq } from "../schemas/loginSchema";

const loginRouter = Router()

loginRouter.post("",
                ensureBodyIsValidMiddleware(loginSchemaReq),
                loginController)

export default loginRouter