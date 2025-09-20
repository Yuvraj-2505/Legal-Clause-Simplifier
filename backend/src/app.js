import express from 'express'
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.route.js";
import document from "./routes/document.route.js";``


const app = express()
//middleware
app.use(express.json())
app.use(cookieParser())

app.use('/api/auth', authRoutes)
app.use('/api/document', document)

export default app
