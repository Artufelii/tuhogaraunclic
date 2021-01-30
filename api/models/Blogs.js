const mongoose = require('mongoose')
const Schema = mongoose.Schema 

const Blogs = mongoose.model('Blog', new Schema({
	title: String,
	category: String,
	cover: String,
	extract: String,
	body: String,
}))

module.exports = Blogs
