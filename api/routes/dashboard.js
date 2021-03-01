const { Router } = require('express')
const Propiedades = require('../models/Propiedades')
const isAuthenticated = require('../middlewares')

const router = Router()

router.get('/dashboard', isAuthenticated, async (req, res) => {
	const admin = req.admin
	const propiedades = await Propiedades.find()

	res
		.status(200)
		.send({ admin, propiedades })
})

module.exports = router
