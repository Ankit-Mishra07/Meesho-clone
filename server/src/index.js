const express = require('express')
const cors = require('cors')
const app = express()

app.use(express.json())
app.use(cors());


const productController = require('./controllers/product.controller');

app.use('/product', productController)


module.exports = app;