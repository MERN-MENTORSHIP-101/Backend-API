import mongoose from "mongoose";
const Schema = mongoose.Schema;
const postSchema = new Schema({
  description: {
    type: String,
    required: [true, "please enter a value"],
  },
});
const postModel = mongoose.model("posts", postSchema);
export default postModel;
