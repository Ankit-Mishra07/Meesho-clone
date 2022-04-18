const router = require('express').Router();
const Signup = require('../models/signup.model')
router.post('/', async(req, res) => {
    try {
        let check = await Signup.findOne({mobile : req.body.mobile})

        if(check) {
            return res.status(200).send(check)
        }
        const signup = await Signup.create(req.body);
        return res.status(200).send(signup)
    }catch(e) {
        return res.status(500).json({status : "Failed", message : e.message})
    }
})