const { Router } = require('express')
const Blog = require('../models/Blogs');
const slug  = require('slug');
//const cloudinary = require('cloudinary');

const router = Router()

router.get('/blog', async (req, res) => {
	const Blogs = await Blog.find()
	
	res
	.status(200)
	.send({ Blogs })
})

router.get('/blog/:slug', async(req, res) => {
	const { slug } = req.params
	const article = await Blog.findOne({ slug })

	res
		.status(200)
		.send({ article })
})

router.post('/new-blog', async (req, res) => {
	const { title, category, cover, extract, body } = req.body
	
	const newBlog = await Blog.create ({
		title,
		category,
		cover,
		extract,
		body,
		slug: slug(title, { charmap: slug.charmap, multicharmap: slug.multicharmap })
	})

	res
	.status(200)
	.send({ newBlog })
})

module.exports = router
