import { Router } from "express";
import { getUserData, login, signup, updateInterests, updateUserProfile, updatePassword, addImage } from "../controllers/userController.js";
import auth from "../middlewares/auth.js";
import { upload } from "../middlewares/multer.js";

const router = Router();

router.route("/signup").post(signup);
router.route("/login").post(login);
router.route("/my-data").get(auth,getUserData);
router.route("/profile").patch(auth,updateUserProfile);
router.route("/interests").patch(auth,updateInterests);
router.route("/password").patch(auth,updatePassword);
router.route("/image").post(auth,upload.single("image"),addImage);

export default router;