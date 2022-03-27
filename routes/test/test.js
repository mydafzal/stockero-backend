const express = require('express')
const router = express.Router()
const authorize = require('../../middleware/userAuthorize')

router.get('/', authorize, (req, res) => {
	try {
		const data = 'data found'

		if (data === 'data found') {
			return res.status(200).json({ message: 'Data found', data: data })
		}


		res.json(true)
	} catch (err) {
		console.error(err.message)
		res.status(500).json({ source: 'Error in user verification', message: err.message })
	}
})

router.post('/', authorize, (req, res) => {
	try {
        const {name, username} = req.body;
		const data = 'data found'

		if (data === 'data found') {
			return res.status(200).json({ message: 'Data found', data: data })
		}

		res.json(true)
	} catch (err) {
		console.error(err.message)
		res.status(500).json({ source: 'Error in user verification', message: err.message })
	}
})

router.post('/post', authorize, (req, res) => {
	try {
        const {name, username} = req.body;

		if (name === 'name') {
			return res.status(200).json({ message: 'Data found', data: data })
		}

		res.json(true)
	} catch (err) {
		console.error(err.message)
		res.status(500).json({ source: 'Error in user verification', message: err.message })
	}
})

module.exports = router
