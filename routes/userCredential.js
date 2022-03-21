const router = require('express').Router()
const authorize = require('../middleware/userAuthorize')

router.post('/', authorize, async (req, res) => {
	try {
		const customer = await models.buyer.findAll({
			where: {
				id: req.body.id,
			},
		})

		res.json(customer)
	} catch (err) {
		console.error(err.message)
		console.error('Error in getting user credentials')
		res.status(500).send('Server error')
	}
})

module.exports = router
