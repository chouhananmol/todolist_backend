import express from "express";
import userRouter from "./routes/user.js";
import taskRouter from "./routes/task.js";
import { config } from "dotenv";
import cookieParser from "cookie-parser";
import { errorMiddleware } from "./controllers/error.js";
import cors from "cors";
import { redirect } from "express";


export const app = express();

config({
    path: "./data/config.env",
});

app.use(express.json());
app.use(cookieParser());
app.use(
    cors({
        origin: [process.env.FRONTEND_URL],
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true,
    })
);

app.use("/api/v1/users", userRouter);
app.use("/api/v1/task", taskRouter);

app.get("/", (req, res) => {
    res.send("Nice Working!");
});
app.get("*", (req, res) => {
    res.redirect(301, "https://todolist-frontend-alpha.vercel.app");
});

// Using Error Middleware
app.use(errorMiddleware);