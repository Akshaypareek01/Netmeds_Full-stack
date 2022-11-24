import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    name:{type:String}
})

const productModel=mongoose.model('products',ProductSchema);
export default productModel

