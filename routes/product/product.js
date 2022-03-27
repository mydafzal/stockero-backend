const express = require('express')
const router = express.Router()
const authorize = require('../../middleware/userAuthorize')
const models = require('../../models')

router.post('/', authorize, async (req, res) => {
	try {
        // Seller ID
		const {Name} = req.body;
        let data = await models.Product.create({
            Name: Name
		})
		if (data) {
			return res.status(201).json({ message: 'Data Created', data: data })
		}
		res.json(true)
	} catch (err) {
		console.error(err.message)
		res.status(500).json({ source: 'Error in user verification', message: err.message })
	}
})



module.exports = router
