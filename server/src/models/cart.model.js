const {Schema, model} = require('mongoose');

const productSchema = new Schema({
    img : {type : [String] ,required : true},
    price : {type: Number, required : true},
    avgrating : {type : Number, required : false},
    ratings : {type : [Number], required: false},
    title : {type : String, required : true},
    des : {type : String, required : false},
    discount : {type : Number, required : false},
    size : {type : [String], required : true},
    soldBy : {type : String, required : true},
    reviews : {type : [Object], required : false},
    category : {type : String, required : true},
    subcategory : {type : String, required : true},
    gender : {type : String, required : true},
    userid : {type : String, required : true},
    count : {type : Number, required : false, default : 0}

}, {
    timestamps : true,
    versionKey : false
})

module.exports = model('cart', productSchema);