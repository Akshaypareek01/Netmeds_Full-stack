import mongoose from "mongoose"
import productModel from "../Models/productmodel.js";


export const Products=async(req,res) =>{
    let data= await productModel.find();
    // console.log(data)
    res.send(data);
}