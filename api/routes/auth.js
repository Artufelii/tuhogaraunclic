const { Router } = require('express') 
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const Admin = require('../models/Admin')
const router = Router()

const signToken = (_id) => {
	return jwt.sign({_id}, 'superSecreta-clave', {
		expiresIn: "2h"
	})
}

router.post('/register', async (req, res) => {
	const { email, password, role } = req.body
	const admin = await Admin.findOne({ email })

	if (admin) {
		return res.status(200)
							.send({ error: 'Usuario ya regisrado' })
	}

	bcrypt.genSalt(16, async (err, salt) => {
		await bcrypt.hash(password, salt, async (err, hash) => {
			await Admin.create({
				 email,
				 password: hash,
				 role,
			 })
			 res
				 .status(200)
				 .send({ registro: 'Usuario registrado con exito' })

			if (err) {
				console.log(err)
			}
		})

	if (err) {
		console.log(err)
	}

	})
})

router.post('/login', async (req, res) => {
	const { email, password } = req.body 
	const admin = await Admin.findOne({ email })

	if (!admin) {
		return res
			.status(200)
			.send({ error: 'Usurio o contraseña invalido' })
	}

	const match = await bcrypt.compare(password, admin.password)
	if (match) {
		const token = signToken(admin._id)
		return res
			.status(200)
			.send({token})
	} else {
		return res
			.status(200)
			.send({ error: 'Usurio o contraseña invalido' })
	}
})

module.exports = router
