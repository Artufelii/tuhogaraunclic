const { Router }  = require('express')
const Propiedades  = require('../models/Propiedades');
const slug = require('slug')

const router = Router()

router.get('/propiedades', async (req, res) => {

	const propiedades = await Propiedades.find()

	res
		.status(200)
		.send({ propiedades })

})

router.get('/propiedades/:slug', async (req, res) => {
	const { slug } = req.params

	const propiedad = await Propiedades.findOne({ slug })

	res
		.status(200)
		.send({ propiedad })

})

router.post('/new-property', async (req, res) => {

	const { title, description, adress, price, cover } = req.body
	
	const newProperty = new Propiedades({
		title,
		description,
		adress,
		price,
		cover,
		slug: slug(title, { charmap: slug.charmap, multicharmap: slug.multicharmap })
	})

	await newProperty.save()

	res
		.status(200)
		.send({ newProperty })

})

module.exports = router
