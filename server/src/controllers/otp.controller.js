const express = require('express');
const router = express.Router();


function generateRandomNumber() {
    var minm = 100000;
    var maxm = 999999;
    return Math.floor(Math
    .random() * (maxm - minm + 1)) + minm;
}

router.get('/', async(req, res) => {
    try {

        let otp = generateRandomNumber()

        res.status(200).send({otp : otp})

    }catch(e) {
        return res.status(500).json({status : "Failed", message : e.message})
    }
})

module.exports = router;


