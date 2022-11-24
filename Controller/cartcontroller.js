// import mongoose from "mongoose"
import cartModel from "../Models/cartmodel.js";


export const cartProduct=async(req,res) =>{
    let data= await cartModel.find();
    console.log(data)
    res.send({
        status:"true",
        data:data
    })
}