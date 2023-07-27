import { User } from "../models/user.js";
// import { Task } from "../models/task.js";
import bcrypt from "bcrypt";
import { sendCookie } from "../utils/features.js";
import jwt from "jsonwebtoken";


export const isAuthenticated = async (req, res, next) => {
    const { token } = req.cookies;
    if (!token) {
        return res.status(404).json({
            success: false,
            message: "LOgin FIrst",
        });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = await User.findById(decoded._id);
    next();
};

export const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email }).select("+password");
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "Incorrect email",
            });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(404).json({
                success: false,
                message: "Incorrect password",
            });
        }
        sendCookie(user, res, `Welcome Back ${user.name}`, 200);
    }
    catch (error) {
        next(error);
    }
};

export const logout = (req, res) => {

    res.status(200).cookie('token', "", {
        expires: new Date(Date.now()),
        sameSite: process.env.NODE_ENV === "Development" ? "lax" : "none",
        secure: process.env.NODE_ENV === "Development" ? false : true,
    })
        .json({
            success: true,
            user: req.user,
        });
};

export const register = async (req, res, next) => {
    try {
        const { name, email, password } = req.body;
        let user = await User.findOne({ email });

        if (user) {
            return res.status(404).json({
                success: false,
                message: "User Already Exist",
            })
        }
        const hashedPassword = await bcrypt.hash(password, 10);

        user = await User.create({
            name, email, password: hashedPassword,
        });

        sendCookie(user, res, "RegisteredSuccessfully", 201);
        res.status(201).
            json({
                success: true,
                user: req.user,
            });
    } catch (error) {
        next(error);
    }
};



export const getMyProfile = (req, res) => {
    res.status(200)
        .json({
            success: true,
            user: req.user,
        });
};


