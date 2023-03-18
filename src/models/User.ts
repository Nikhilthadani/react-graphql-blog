import { Schema, model } from "mongoose";

const userSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minLength: 6,
  },
  blogs: [{ type: Schema.Types.ObjectId, ref: "Blog" }],
  comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
});

export default model("User", userSchema);
