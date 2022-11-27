import mongoose from "mongoose"
import productModel from "../Models/productmodel.js";

export const searchProduct=async(req,res) =>{
    
    
   let payload=req.body.payload.trim();
   console.log(payload);
   // let search=await productModel.find({title:{$regex:new RegExp('^'+payload+'.*','i')}}).exec();
 let search=await productModel.find({title:{$regex:payload}})
   search=search.slice(0,10);
   // console.log(search);
   res.send({payload:search});
   
}