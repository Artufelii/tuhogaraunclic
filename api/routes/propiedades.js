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

	const { 
		title, 
		description, 
		adress, 
		price, 
		cover, 
		image1, 
		image2, 
		image3, 
		image4, 
		image5, 
		image6, 
		image7, 
		image8, 
		image9,
	} = req.body

	//const imagenes = req.files

	const newProperty = await Propiedades.create({
		title,
		description,
		adress,
		price,
		images: {
			cover, 
			image1: image1 || '', 
			image2: image2 || '', 
			image3: image3 || '', 
			image4: image4 || '', 
			image5: image5 || '', 
			image6: image6 || '', 
			image7: image7 || '', 
			image8: image8 || '', 
			image9: image9 || '',
		},
		slug: slug(title, { charmap: slug.charmap, multicharmap: slug.multicharmap })
	})

	res
		.status(200)
		.send({ newProperty })

})

module.exports = router
