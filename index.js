import express from "express";
import userRoute from "./Routers/userRoute.js";
import postRoute from "./Routers/postRouter.js";
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/user", userRoute);
app.use("/posts", postRoute);

app.get("/", (req, res) => {
  res.send("user is sent");
});

export default app;
