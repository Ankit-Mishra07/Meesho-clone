const {Schema, model} = require('mongoose')

module.exports = model('user', new Schema({
    mobile : {type : Number, required : true},
    otp : {type: Number, required : false}
}, {
    timestamps : true,
    versionKey : false
}))