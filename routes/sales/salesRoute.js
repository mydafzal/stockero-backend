const express = require('express')
const router = express.Router()
const models = require('../../models')
const authorize = require('../../middleware/userAuthorize')

router.get('/list', authorize, async (req, res) => {
	try {
		const salesData = await models.Sale.findAll()

		return res.status(200).json({ data: salesData })
	} catch (err) {
		console.error(err.message)
		res.status(500).json({ source: 'Error in getting sales', message: err.message })
	}
})

module.exports = router
