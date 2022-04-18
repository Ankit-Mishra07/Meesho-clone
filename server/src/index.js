const express = require('express')
const cors = require('cors')
const app = express()

app.use(express.json())
app.use(cors());


const productController = require('./controllers/product.controller');
const otpController = require('./controllers/otp.controller')

app.use('/product', productController)
app.use('/otp', otpController)

module.exports = app;