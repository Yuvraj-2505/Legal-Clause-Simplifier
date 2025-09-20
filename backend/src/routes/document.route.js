import express from 'express'
import documentController from "../controllers/document.controller.js"
import upload from '../middleware/upload.middleware.js'

const router = express.Router()

router.post("/upload", upload.single("document"), documentController);


export default router


