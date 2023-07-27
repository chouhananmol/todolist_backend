import express from "express";
import { getMyProfile, register, isAuthenticated, login, logout } from "../controllers/user.js";


const router = express.Router();

router.post("/new", register);
router.post("/login", login);
router.get("/logout", logout);
router.get("/me", isAuthenticated, getMyProfile);

export default router;
