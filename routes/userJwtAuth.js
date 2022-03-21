const express = require('express')
const router = express.Router()
const models = require('../models')
const bcrypt = require('bcrypt')
const validInfo = require('../middleware/validInfo')
const jwtGenerator = require('../utils/jwtGenerator')
const authorize = require('../middleware/userAuthorize')

router.post('/register', async (req, res) => {
	const { email, firstName, lastName, password } = req.body

	try {
		const user = await models.buyer.findAll({
			where: {
				Email: email,
			},
		})
		if (user.length > 0) {
			return res.status(401).json({ data: 'User already exist!' })
		}
		
		const salt = await bcrypt.genSalt(9)
		const bcryptPassword = await bcrypt.hash(password, salt)

		let addUser = await models.buyer.create({
			firstName: firstName,
			lastName: lastName,
			Email: email,
			Password: bcryptPassword,
		})

		const userJWTToken = jwtGenerator(addUser.id)

		return res.json({ token: userJWTToken, data: addUser })
	} catch (err) {
		console.error(err)
		res.status(500).json({ source: 'Error in registering the User', message: err.message })
	}
})

router.post('/login', validInfo, async (req, res) => {
	const { email, password } = req.body

	try {
		const user = await models.buyer.findAll({
			where: {
				email: email,
			},
		})
		if (user.length === 0) {
			return res.status(401).json('No user exists')
		}

		const validPassword = await bcrypt.compare(password, user[0].password)

		if (!validPassword) {
			return res.status(401).json('Invalid Credential')
		}
		const userJWTToken = jwtGenerator(user[0].id)
		return res.status(200).json({ token: userJWTToken, success: true, data: user })
	} catch (err) {
		console.error(err)
		res.status(500).json({ source: 'Error in user login', message: err.message })
	}
})

router.post('/verify', authorize, (req, res) => {
	try {
		res.json(true)
	} catch (err) {
		console.error(err.message)
		res.status(500).json({ source: 'Error in user verification', message: err.message })
	}
})

module.exports = router
