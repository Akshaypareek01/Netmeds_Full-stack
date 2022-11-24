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
   try{
    const {id}=req.params;
    console.log(id)
    let body=req.body.quantity;
    if(id){
        let data=await cartModel.findByIdAndUpdate( id,{quantity:body} );
        res.send({
            status:"true",
            data:data
        })
    }else{
        res.send({
            status:"false",

        })
    }
   }catch(err){
    res.status(500).send({
        status:"false",
        data:err.message
    })
   }
}

export const deleteCart=async(req,res) =>{
    try{
        const {id}=req.params;
        console.log(id)
        if(id){
            let data=await cartModel.findByIdAndRemove(id);
            res.send({
                status:"true",
                data:data,
                message:"deleted successfully"
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




