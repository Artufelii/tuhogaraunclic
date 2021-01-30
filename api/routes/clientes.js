const { Router } = require('express')
const Cliente = require('../models/Clientes')

const router = Router()

router.post('/send-message', async (req, res) => {
	const { name, email, phone, message } = req.body

	const newClient = new Cliente ({
		name,
		email,
		phone,
		message: message || '',
	})

	await newClient.save()

	res.status(200).send({ newClient })
})

module.exports = router
