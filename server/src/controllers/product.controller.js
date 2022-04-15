const express = require('express');

const router = express.Router();

const Product = require('../models/product.model')

router.post('/', async(req, res) => {
    try {
        const product = await Product.create(req.body)
        return res.status(200).send(product)
    }catch(e) {
        return res.status(500).json({status : "Failed", message : e.message})
    }
})



module.exports = router;
