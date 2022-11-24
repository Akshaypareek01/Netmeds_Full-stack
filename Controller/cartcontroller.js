import mongoose from "mongoose"
import cartModel from "../Models/cartmodel.js";


export const cartProduct=async(req,res) =>{
    const {user}=req.params;
   try{
    if(user){
        let data= await cartModel.find({userid:user});
        if(data.length!=0){
            res.send({
                status:"true",
                data:data
            })
        }else{
            res.send({
                status:"true",
                data:"Nothing in cart"
            })
        }
       
    }else{
        res.send({
            status:"false",
            data:"Cart Empty"
        })
    }
   }catch(e){
    res.status(500).send({
        status:"false",
        data:e
    })
   }
}

export const addCart=async(req,res) =>{
    try{
    let body=req.body;
    console.log(body)
    if(body){
        body={...body,quantity:0}
        const cart=new cartModel(body)
        const result=await cart.save();

        res.send({
            status:"true",
            data:result
        })
    }else{
        res.send({
            status:"false",
            data:"Add cart body"
        })
    }
    }catch(e){
        res.status(500).send({
            status:"false",
            data:e.message
        })
    }
}

export const updateCart=async(req,res) =>{
    const {id}=req.params;
    let body=req.body;
    if(id){
        let data=await cartModel.findByIdAndUpdate({ _id:id,actual_price:70 });
        res.send({
            status:"true",
            data:data
        })
    }else{
        res.send({
            status:"false",

        })
    }
}

export const deleteCart=async(req,res) =>{
    try{
        const {_id}=req.params;
        if(id){
            let data=await cartModel.findByIdAndDelete({_id:id});
            res.send({
                status:"true",
                data:data
            })
        }else{
            res.status(500).send({
                status:"false",
                data:"ID NOT FOUND"
            })
        }
    }catch(e){
        res.status(500).send({
            status:"false",
            data:e
        })
    }
}




