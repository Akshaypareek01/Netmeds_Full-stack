import productModel from "../Models/productmodel.js";


export const Products=async(req,res) =>{
 try {
    let {page=1,sortBy="_id",order="asc",pageSize=20,startPoint=0, endPoint=Infinity,category,sub_category,manufacturer}=req.query
    
    console.log(req.query);
    let filter = {
        $and: [
            {
            actual_price: {$gt:  parseInt(startPoint) }
        },
            {
            actual_price: {$lt: parseInt(endPoint) }
        }
    ]
    }

    let data = "";
    if (category=="Personal Care"){
        data = await productModel.find({category: "Personal Care"}).sort({[sortBy]:order==="asc"? 1:-1}).limit(pageSize).skip(pageSize*(page-1))
    }
   else if (category=="Treatments"){
        data = await productModel.find({category: "Treatments"}).sort({[sortBy]:order==="asc"? 1:-1}).limit(pageSize).skip(pageSize*(page-1))
    }
   else if (category=="Mom & Baby"){
        data = await productModel.find({category: "Mom & Baby"}).sort({[sortBy]:order==="asc"? 1:-1}).limit(pageSize).skip(pageSize*(page-1))
    }
    else if (category=="Covid Essentials"){
        data = await productModel.find({category: "Covid Essentials"}).sort({[sortBy]:order==="asc"? 1:-1}).limit(pageSize).skip(pageSize*(page-1))
    }
    else{
        data = await productModel.find(filter).sort({[sortBy]:order==="asc"? 1:-1}).limit(pageSize).skip(pageSize*(page-1))
    }



    // console.log(data)
   return res.send(data)
 } catch (error) {
    return res.status(400).send({status : "Error Found", data: "Not Found"});
 }
}
