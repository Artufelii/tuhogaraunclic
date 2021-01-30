const { Router } = require('express')
const Blog = require('../models/Blogs');
//const cloudinary = require('cloudinary');

const router = Router()

router.get('/blog', async (req, res) => {
	const Blogs = await Blog.find()
	
	res
	.status(200)
	.send({ Blogs })
})

router.post('/new-blog', async (req, res) => {
	const { title, category, cover, extract, body } = req.body
	
	const newBlog = new Blog({
		title,
		category,
		cover,
		extract,
		body,
	})

	await newBlog.save()

	res
	.status(200)
	.send({ newBlog })
})

module.exports = router
