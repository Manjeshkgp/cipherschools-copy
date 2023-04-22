import { Router } from "express";
import { getUserData, login, signup, updateInterests, updateUserProfile, updatePassword, addImage, followUser, unFollowUser, getFollowers, getFollowing, getUser, searchUsers, updateCiphers, getCiphers } from "../controllers/userController.js";
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
router.route("/follow").patch(auth,followUser);
router.route("/unfollow").patch(auth,unFollowUser);
router.route("/followers").get(auth,getFollowers);
router.route("/following").get(auth,getFollowing);
router.route("/search").get(auth,searchUsers);
router.route("/cipher/inc").patch(auth,updateCiphers)
router.route("/ciphers").get(auth,getCiphers);
router.route("/:username").get(auth,getUser);

export default router;