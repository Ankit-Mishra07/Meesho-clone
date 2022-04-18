const router = require('express').Router();
const Signup = require('../models/signup.model')
const {body, validationResult} = require('express-validator')


router.post('/', body('mobile').isLength({min : 10, max : 10}).withMessage("Please enter valid mobile number!") ,  



async(req, res) => {
    try {

        const errors = validationResult(req)
        if(!errors.isEmpty()) {
           let errMsg = errors.array().map(({msg, param}) => {
                return {
                    [param] : msg
                }
           })
            return res.status(400).send({msg : errMsg})
        }

        let temp = ["9", "8", "7", "6"]
        let zeroth = req.body.mobile.toString()[0]
        if(!temp.includes(zeroth)) {
            return res.status(400).send({
                msg: [
                    {
                        mobile: "Please enter valid mobile number!"
                    }
                ]
            })
        }
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

module.exports = router;