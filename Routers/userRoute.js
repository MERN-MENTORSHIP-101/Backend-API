import { registerUser, getUsers } from "../Controlers/userControler.js";
import express from "express";
const userRoute = express.Router();

userRoute.route("/register").post(registerUser);
userRoute.get("/getusers", getUsers);
export default userRoute;
