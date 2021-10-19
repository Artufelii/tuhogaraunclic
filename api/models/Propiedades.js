<<<<<<< HEAD
const mongoose  = require('mongoose');
const Schema = mongoose.Schema

const Propiedades = mongoose.model('Propiedad', new Schema({
	title: String,
	description: String,
	adress: String,
	price: String,
	chars: {
		land: String,
		construction: String,
		bedrooms: String,
		restrooms: String,
		parking: String,
	},
	images: {
		cover: String,
		image1: String,
		image2: String,
		image3: String,
		image4: String,
		image5: String,
		image6: String,
		image7: String,
		image8: String,
		image9: String,
	},
	slug: String,
}))

module.exports = Propiedades
=======
const mongoose  = require('mongoose');
const Schema = mongoose.Schema

const Propiedades = mongoose.model('Propiedad', new Schema({
	title: String,
	description: String,
	adress: String,
	price: String,
	type: String,
	status: String,
	chars: {
		land: String,
		construction: String,
		bedrooms: String,
		restrooms: String,
		parking: String,
	},
	images: {
		cover: String,
		image1: String,
		image2: String,
		image3: String,
		image4: String,
		image5: String,
		image6: String,
		image7: String,
		image8: String,
		image9: String,
	},
	slug: String,
}))

module.exports = Propiedades
>>>>>>> 376c4f71516a2a1f0ee2396c70be1de3b576b446
