import express from "express";
import { signup, login, me,forgotPassword,resetPassword,editProfile} from "../controllers/authController.js";
import { protect } from "../middleware/authmiddleware.js";


const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.get("/me",protect, me);
router.post("/forgot-password",forgotPassword);
router.post("/reset-password/:token",resetPassword);
router.patch("/Profile",protect,editProfile);

export default router;
