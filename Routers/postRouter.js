import { createPost } from "../Controlers/postControler.js";
import express from "express";
const postRoute = express.Router();

postRoute.route("/create").post(createPost);
// userRoute.get("/getusers", getUsers);
export default postRoute;
