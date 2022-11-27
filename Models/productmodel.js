import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    title:{type:String},
    img1:{type:String},
     img2:{type:String},
     img3:{type:String},
    actual_price:{type:Number},
    crossed_price:{type:Number},
    manufacturer: {type:String},
    country: {type:String},
    category: {type:String},
    sub_category:{type:String}

})

const productModel=mongoose.model('products',ProductSchema);
export default productModel
