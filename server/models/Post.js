import mongoose from "mongoose"

const postSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: String,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
})

const Post = mongoose.model("Post", postSchema)

export default Post;
