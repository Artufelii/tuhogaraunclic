const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Clientes = mongoose.model('Cliente', new Schema({
	name: String,
	email: String,
	phone: String,
	message: String,
}))

module.exports = Clientes
