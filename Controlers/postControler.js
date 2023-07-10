import postModel from "../Models/postmodel.js";
export const createPost = async (req, res) => {
  try {
    const { description } = req.body;
    console.log(description);
    const post = await postModel.create({ description });
    res.status(201).json({
      message: "post created",
      post,
    });
  } catch (err) {
    console.log(err);
  }
};
