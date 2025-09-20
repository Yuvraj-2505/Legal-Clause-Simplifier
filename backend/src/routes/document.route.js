import express from 'express'
import documentController from "../controllers/document.controller"

const router = express.Router()

router.use('/upload', documentController.processDocument)


export default router


