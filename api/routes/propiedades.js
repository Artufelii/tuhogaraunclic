const { Router }  = require('express')
const cloudinary = require('cloudinary')
const fs = require('fs-extra')
const Propiedades  = require('../models/Propiedades');
const slug = require('slug')

const router = Router()

cloudinary.config({
	cloud_name: process.env.CLOUD_NAME,
	api_key: process.env.API_KEY,
	api_secret: process.env.API_SECRET,
})

router.get('/properties', async (req, res) => {

	const propiedades = await Propiedades.find()

	res
		.status(200)
		.send({ propiedades })

})

router.get('/properties/:slug', async (req, res) => {
	const { slug } = req.params

	const propiedad = await Propiedades.findOne({ slug })

	res
		.status(200)
		.send({ propiedad })

})

router.post('/properties/new-property', async (req, res) => {

	const { 
		title, 
		description, 
		adress, 
		price, 
		land,
		construction,
		bedrooms,
		restrooms,
		parking,
		type,
		status,
	} = req.body

	const imagenes = req.files
	const uploadImages = {}

	for await (let imagen of imagenes) {
		try {
			uploadImages[imagen.fieldname] = await cloudinary.v2.uploader.upload(imagen.path)
		} catch (e) {
			console.error(e)
		}
	}

	const newProperty = await Propiedades.create({
		title,
		description,
		adress,
		price,
		type,
		status,
		chars: {
			land,
			construction,
			bedrooms,
			restrooms,
			parking,
		},
		images: {
			cover: uploadImages.cover.secure_url, 
			image1: uploadImages.imagen1 ? uploadImages.imagen1.secure_url : '', 
			image2: uploadImages.imagen2 ? uploadImages.imagen2.secure_url : '',
			image3: uploadImages.imagen3 ? uploadImages.imagen3.secure_url : '', 
			image4: uploadImages.imagen4 ? uploadImages.imagen4.secure_url : '', 
			image5: uploadImages.imagen5 ? uploadImages.imagen5.secure_url : '', 
			image6: uploadImages.imagen6 ? uploadImages.imagen6.secure_url : '', 
			image7: uploadImages.imagen7 ? uploadImages.imagen7.secure_url : '', 
			image8: uploadImages.imagen8 ? uploadImages.imagen8.secure_url : '', 
			image9: uploadImages.imagen9 ? uploadImages.imagen9.secure_url : '',
		},
		slug: slug(title, { charmap: slug.charmap, multicharmap: slug.multicharmap })
	})

	for await (let imagen of imagenes) {
		try {
			await fs.unlink(imagen.path)
		} catch (e) {
			console.error(e)
		}
	}

	res
		.status(200)
		.send({ newProperty })

})

module.exports = router
