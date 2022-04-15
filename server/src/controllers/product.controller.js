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

router.get('/', async(req, res) => {
    try {
        const product = await Product.find().lean().exec();
        return res.status(200).send(product) 
    }catch(e) {
        return res.status(500).json({status : "Failed", message : e.message})
    }
})

router.get("/:id", async(req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        return res.status(200).send(product); 
    }catch(e) {
        return res.status(500).json({status : "Failed", message : e.message})
    }
})

router.get('/search/:title', async(req, res) => {
    try {
        const regex = new RegExp(req.params.title, 'i');
        const product = await Product.find({title : regex});
        return res.status(200).send(product)
    }catch(e) {
        return res.status(500).json({status : "Failed", message : e.message})
    }
})

router.patch('/:id', async(req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
            new : true
        })
        return res.status(200).send(product)
    }catch(e) {
        return res.status(500).json({status : "Failed", message : e.message})
    }
})




module.exports = router;

