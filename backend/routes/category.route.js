import express from "express"
import { createCategory, getCategory } from "../controller/category.controller.js"

const router = express.Router()


router.post("/create", createCategory)
router.get('/view', getCategory)

export default router