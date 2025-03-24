import express from "express";
import { testPostController } from "../Controllers/testController.js";
const router = express.Router();
router.post('/test-post', testPostController)

export default router