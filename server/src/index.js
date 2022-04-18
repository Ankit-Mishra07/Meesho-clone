const express = require('express')
const cors = require('cors')
const app = express()

app.use(express.json())
app.use(cors());


const productController = require('./controllers/product.controller');
const otpController = require('./controllers/otp.controller')
const signupController = require('./controllers/signup.controller')

app.use('/product', productController)
app.use('/otp', otpController)
app.use('/signup', signupController)
app.use('/cart', require('./controllers/cart.controller'))


module.exports = app;