const mongoose  = require('mongoose');
const Schema = mongoose.Schema

const Propiedades = mongoose.model('Propiedad', new Schema({
	title: String,
	description: String,
	adress: String,
	price: String,
	cover: String,
	slug: String,
}))

module.exports = Propiedades
