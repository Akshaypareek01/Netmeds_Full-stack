import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
    userid:{type:String,required:true},
    img1:{type:String},
    manufacturer:{type:String},
    quantity:{type:Number},
    id:{type:String},
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

const cartModel=mongoose.model('carts',cartSchema);
export default cartModel