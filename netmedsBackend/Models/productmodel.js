import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    title:{type:String}
})

const productModel=mongoose.model('products',ProductSchema);
export default productModel