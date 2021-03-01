const jsw = require('jsonwebtoken') 
const Admin = require('../models/Admin') 

const isAuthenticated =  (req, res, next) => {
	const token = req.headers.authentication
	if(!token) {
		return res.sendStatus(403)
	}

	jsw.verify(token, 'superSecreta-clave', async (err, decoded) => {
		if (err) {
			console.error(err)	
		}

		const { _id } = decoded
		const admin = await Admin.findById({_id})
		req.admin = admin
		
		next()
	})
}

module.exports = isAuthenticated
