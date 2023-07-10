import mongoose from "mongoose";
const Schema = mongoose.Schema;
import validator from "validator";
import bcrypt from "bcrypt";
const UserSchema = new Schema({
  firstName: {
    type: String,
    required: [true, "please enter your first name"],
  },
  lastName: {
    type: String,
    required: [true, "please enter your last name"],
  },
  email: {
    type: String,
    validate: [validator.isEmail, "please enter correct email address"],
    required: [true, "please enter your email"],
  },
  password: {
    type: String,
    required: [true, "please enter your password"],
    minlength: [8, "please enter 8 or more characters"],
  },
  passwordConfirm: {
    type: String,
    required: [true, "please enter your password confirmation"],
    minlength: [8, "please enter 8 or more characters"],
    validate: {
      validator: function (pass) {
        return pass == this.password;
      },
      message: "please enter the correct password confirmation",
    },
  },
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
});
//middleware

//pre hook
//1)PREVENT SAVING PASSWORDcONFIRM
UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  this.passwordConfirm = undefined;
  next();
});
//2)hash password

//post hook

const Authmodel = mongoose.model("User", UserSchema);
export default Authmodel;
