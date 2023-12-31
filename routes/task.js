import express from "express";
import { isAuthenticated } from "../controllers/user.js";
import { newTask, getMyTask, updateTask, deleteTask } from "../controllers/task.js";

const router = express.Router();

router.post("/new", isAuthenticated, newTask);
router.get("/mytask", isAuthenticated, getMyTask);
router
    .route("/id/:id")
    .put(isAuthenticated, updateTask)
    .delete(isAuthenticated, deleteTask);

export default router;