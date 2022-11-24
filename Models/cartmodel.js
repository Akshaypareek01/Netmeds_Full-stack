import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
    name:{type:String},
    userid:{type:String,required:true},
    img1:{type:String},
    manufacturer:{type:String},
    quantity:{type:Number},
    id:{type:String}
})

const cartModel=mongoose.model('carts',cartSchema);
export default cartModel