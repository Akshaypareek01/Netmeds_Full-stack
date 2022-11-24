import productModel from "../Models/productmodel.js";


export const Products=async(req,res) =>{
 try {
    let {page=1,sortBy="_id",order="asc",pageSize=20,startPoint=0, endPoint=Infinity}=req.query
    let filter = {
        $and: [
            {
            actual_price: {$gt: startPoint }
        },
            {
            actual_price: {$lt: endPoint }
        }
    ]
    }

    let data = await productModel.find(filter).sort({[sortBy]:order==="asc"? 1:-1}).limit(pageSize).skip(pageSize*(page-1))

    console.log(data)
   return res.send({
        status:"true",
        data:data
    })
 } catch (error) {
    return res.status(400).send({status : "Error Found", data: "Not Found"});
 }
}

