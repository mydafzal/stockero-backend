;('use strict')
const express = require('express')
const cors = require('cors')
const app = express()

/* Express Middleware */
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*')
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
	next()
})

/* Import Route Files */
const userCredential = require('./routes/userCredential')
const manufacturerRoute = require('./routes/manufacturer/manufactuterRoute.js')
/* Routes */

app.use('/user/authentication', require('./routes/userJwtAuth'))
app.use('/buyer/authentication', require('./routes/userJwtAuth'))
app.use('/user/credential', userCredential)
<<<<<<< HEAD
app.use('/test',require('./routes/test/test.js'))
app.use('/product',require('./routes/product/product.js'))
=======
app.use('/manufacturer', manufacturerRoute)
>>>>>>> 708c9765060810f42ab7af2016140b410a2745cf

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
	console.log(`Started listening at ${PORT}`)
})
