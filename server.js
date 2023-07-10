import mongoose from "mongoose";
import dotenv from "dotenv";
import app from "./index.js";
dotenv.config({ path: "./.env" });
mongoose
  .connect(
    "mongodb+srv://samkam:6QcfKwXHj8V1RVK6@cluster0.dnuc6.mongodb.net/directED"
  )
  .then(() => {
    app.listen(8000, () => {
      console.log(`server is up and running on port,${process.env.PORT}`);
    });
  });
