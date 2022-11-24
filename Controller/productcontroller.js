import productModel from "../Models/productmodel.js";


export const Products=async(req,res) =>{
    let data= await productModel.find();
    console.log(data)
    res.send({
        status:"true",
        data:data
    })
}

export const ProductsAsc = async(req, res) =>{
    let data= await productModel.aggregate(
        [
          { $sort : { actual_price : -1 } }
        ]
     )
    console.log(data)
    res.send({
        status:"true",
        data:data
    })
} 

