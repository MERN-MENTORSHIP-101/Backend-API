import Authmodel from "../Models/userModel.js";
import axios from "axios";
import { apiDomain } from "../utils/utlis.js";
export const registerUser = async (req, res) => {
  const { firstName, lastName, email, password, passwordConfirm } = req.body;
  console.log(firstName, lastName, email, password, passwordConfirm);
  const userRegistered = await Authmodel.create({
    firstName,
    lastName,
    email,
    password,
    passwordConfirm,
  });
  res.status(200).json({
    message: "success",
    userRegistered,
  });
};

// export const loginUser = async () => {};
export const getUsers = async (req, res) => {
  // console.log("users");
  const users = await Authmodel.find();
  res.status(200).json({
    message: "success",
    users,
  });
};
