import { Router } from "express";
import { getUserData, login, signup, updateInterests, updateUserProfile } from "../controllers/userController.js";
import auth from "../middlewares/auth.js";

const router = Router();

router.route("/signup").post(signup);
router.route("/login").post(login);
router.route("/my-data").get(auth,getUserData);
router.route("/profile").patch(auth,updateUserProfile)
router.route("/interests").patch(auth,updateInterests)

export default router;