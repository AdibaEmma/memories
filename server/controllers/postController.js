import Post from "../models/Post.js"

export const getPosts = async (req, res, next) => {
    try {
        const post = await Post.find({})
        
        res.status(200).json(post)

    } catch (err) {
        res.status(404).json(err.message)
    }
}

export const createPost = async (req, res, next) => {
    const post = req.body;

    const newPost = new Post(post)

    try {
        await newPost.save()
        res.status(201).json(newPost)
    } catch (err) {
        res.status(409).json({ message: err.message })
    }
}