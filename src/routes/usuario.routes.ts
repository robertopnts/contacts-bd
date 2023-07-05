import { Router } from "express";
import createUserController from "../controllers/usuario/createUser.controller";
import ensureBodyIsValidMiddleware from "../middlewares/ensureBodyIsValid.middleware";
import { userSchemaReq, userSchemaUpdateReq } from "../schemas/userSchema";
import ensureIsAuthMiddleware from "../middlewares/ensureIsAuth.middleware";
import listUsersController from "../controllers/usuario/listUsers.controller";
import updateUserController from "../controllers/usuario/updateUser.controller";
import deleteUserController from "../controllers/usuario/deleteuser.controller";
import retrieveUserController from "../controllers/usuario/retrieveUser.controller";

const userRouter = Router()

userRouter.post("", 
                ensureBodyIsValidMiddleware(userSchemaReq), 
                createUserController
)
userRouter.get("",
                ensureIsAuthMiddleware,
                listUsersController
)
userRouter.get("/user",
                ensureIsAuthMiddleware,
                retrieveUserController
)
userRouter.patch("",
                ensureIsAuthMiddleware,
                ensureBodyIsValidMiddleware(userSchemaUpdateReq),
                updateUserController
)
userRouter.delete("",
                ensureIsAuthMiddleware,
                deleteUserController
)

export default userRouter