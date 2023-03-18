import { model, Schema } from "mongoose";

const blogSchema: Schema = new Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
});

export default model("Blog", blogSchema);
