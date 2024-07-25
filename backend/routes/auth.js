import express from "express";
import userController from "../controllers/user_controller.js";
const router = express.Router();

router.post("/signup", userController.userSingUp);
router.post("/signin", userController.userLogin);

export default router;
