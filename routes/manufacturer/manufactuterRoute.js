const express = require('express')
const router = express.Router()
const models = require('../../models')
const authorize = require('../../middleware/userAuthorize')

router.post('/register', async (req, res) => {
	const { email, name, password, address, city, ntn } = req.body

	try {
		const user = await models.Manufacturer.findAll({
			where: {
				email: email,
			},
		})
		if (user.length > 0) {
			return res.status(401).json({ data: 'Manufacturer already exist!' })
		}

		const salt = await bcrypt.genSalt(9)
		const bcryptPassword = await bcrypt.hash(password, salt)

		let addUser = await models.Manufacturer.create({
			name: name,
			email: email,
			password: bcryptPassword,
			address: address,
			city: city,
			ntn: ntn,
		})

		const userJWTToken = jwtGenerator(addUser.id)

		return res.json({ token: userJWTToken, data: addUser })
	} catch (err) {
		console.error(err)
		res.status(500).json({ source: 'Error in registering the Manufacturer', message: err.message })
	}
})

router.get('/list', authorize, async (req, res) => {
	try {
		const manufacturerData = await models.Manufacturer.findAll({
			where: {
				isApproved: false,
			},
		})

		return res.status(200).json({ data: manufacturerData })
	} catch (err) {
		console.error(err.message)
		res.status(500).json({ source: 'Error in user verification', message: err.message })
	}
})

router.post('/approve/by/:id', authorize, async (req, res) => {
	try {
		const id = req.params.id
		const data = await models.Manufacturer.update(
			{
				isApproved: true,
			},
			{
				id: id,
			}
		)
		return res.status(200).json({ data: data })
	} catch (err) {
		console.error(err.message)
		res.status(500).json({ source: 'Error in approval', message: err.message })
	}
})

module.exports = router
