import 'reflect-metadata'
import 'express-async-errors'
import express from "express"
import userRouter from './routes/usuario.routes'
import loginRouter from './routes/sessao.routes'
import contactRoutes from './routes/contatos.routes'
import { handleError } from './errors'

const cors = require("cors")

const app = express()

app.use(cors())

app.use(express.json())
app.use("/user", userRouter)
app.use("/login", loginRouter)
app.use("/contact", contactRoutes)
app.use(handleError)

export default app