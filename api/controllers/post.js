const { default: chalk } = require('chalk')
const Post = require('../models/post')

exports.getPosts = (req, res) => {
    const posts = Post.find()
        .then((posts) => {
            return res.status(200).json({ posts: posts })
        })
        .catch((error) => res.status(400).json({ error: error }))
}
exports.getPost = (req, res) => {
    const posts = Post.find({ _id: req.params.id })
        .then((posts) => {
            return res.status(200).json({ post: posts })
        })
        .catch((error) => res.status(400).json({ error: error }))
}
exports.createPost = (req, res) => {
    const post = new Post(req.body)
    post.save((err, result) => {
        res.status(200).json({
            post: result,
        })
    })
}
