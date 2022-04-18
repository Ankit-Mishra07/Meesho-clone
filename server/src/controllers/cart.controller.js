const router = require('express').Router();

const Cart = require('../models/cart.model')

router.post('/',async (req, res) => {
    try {
        const cart = await Cart.create(req.body);
        res.status(200).send(cart);
        
    }catch(e) {
        return res.status(500).json({status : "Failed", message : e.message})
    }
})

router.get('/', async(req, res) => {
    try {
        const cart = await Cart.find();
        res.status(200).send(cart);
        
    }catch(e) {
        return res.status(500).json({status : "Failed", message : e.message})
    }
})

router.patch('/:id', async(req, res) => {
    try {
        const cart = await Cart.findByIdAndUpdate(req.params.id, req.body, {
            new : true
        })
        return res.status(200).send(cart)

    }catch(e) {
        return res.status(500).json({status : "Failed", message : e.message})
    }
})


router.delete("/:id", async(req, res) => {
    try {

        const cart = await Cart.findByIdAndDelete(req.params.id);
        return res.status(200).send(cart);

    }catch(e) {
        return res.status(500).json({status : "Failed", message : e.message})
    }
})

module.exports = router;
