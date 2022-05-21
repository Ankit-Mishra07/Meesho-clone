const express = require('express');
const router = express.Router();

const fast2sms = require('fast-two-sms')


function generateRandomNumber() {
    var minm = 100000;
    var maxm = 999999;
    return Math.floor(Math
    .random() * (maxm - minm + 1)) + minm;
}




router.get('/:number', async(req, res) => {
    try {

        let num = req.params.number

        let otp = generateRandomNumber()
        const options = {
            authorization : process.env.KEY,
            message : `Your OTP for Meesho Clone login is ${otp}. Please do not share this OTP with anyone to keep your account safe.`,
            numbers : [`${num}`]
        }
        
        fast2sms.sendMessage(options) 
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
        res.status(200).send({otp : otp})

    }catch(e) {
        return res.status(500).json({status : "Failed", message : e.message})
    }
})

module.exports = router;


