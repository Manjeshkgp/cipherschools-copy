import { Router } from "express";
import { getUserData, login, signup } from "../controllers/userController.js";
import auth from "../middlewares/auth.js";

const router = Router();

router.route("/signup").post(signup);
router.route("/login").post(login);
router.route("/my-data").get(auth,getUserData);

export default router;