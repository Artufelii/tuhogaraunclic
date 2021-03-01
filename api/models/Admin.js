const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Administrador = mongoose.model('Admin', new Schema({
	profile_img: String,
	username: String,
	email: String,
	password: String,
	role: String,
}))

module.exports = Administrador
