const express = require('express')
const PostController = require('../controllers/post')
const validator = require('../validator')

const router = express.Router()

router.get('/', PostController.getPosts)
router.get('/post/:id', PostController.getPost)
router.post('/post', validator.createPostValidator, PostController.createPost)

module.exports = router;