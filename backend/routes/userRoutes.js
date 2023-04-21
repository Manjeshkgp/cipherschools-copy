import { Router } from "express";
import { signup } from "../controllers/userController.js";

const router = Router();

router.route("/signup").post(signup)

export default router;