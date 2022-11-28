import productModel from "../Models/productmodel.js";

const categOption = [
    "Personal Care","Treatments","Mom & Baby","Covid Essentials","Eyewear","Fitness","Ayush",
    "Surgical",
"Skin Care",
"Tools & Appliances",
"Diabetes Support",
"Veterinary"
]

const manufOption=[
    "Cipla Ltd(Otc)",
 "Patanjali Ayurved Ltd",
 "Piramal Healthcare Ltd",
 "Inventz Lifesciences Pvt Ltd",
 "Gsk",
 "Chinar Forge Ltd.",
 "V1 Enterprises",
 "VLCC Personal Care Ltd",
 "Colgate Palmolive India Ltd",
 "NATURE's ESSENCE PVT LTD",
 "The Himalaya Drug Company",
 "Dabur India Ltd",
 "Pep Technologies Pvt, Ltd"
]

export const Products=async(req,res) =>{
 try {
    let {page,sortBy="_id",order="asc",pageSize=20,startPoint=0, endPoint=Infinity,category="All",sub_category,manufacturer="All"}=req.query
    
    console.log(req.query);
    let filter = {
        $and: [
            {
            actual_price: {$gt: startPoint }
        },
            {
            actual_price: {$lt: endPoint }
        },
        {

            category : {$in: (category=="All") ? categOption : category.split(",")}
        },
        {
            manufacturer : {$in: (manufacturer=="All") ? manufOption : manufacturer.split(",")}

        }
    ]

    
    
}
console.log(category.split(","))
console.log(manufacturer.split(","))

let data = "";
data = await productModel.find(filter).sort({[sortBy]:order==="asc"? 1:-1}).limit(pageSize).skip(pageSize*(page-1))
//     if (category=="Personal Care"){
//         data = await productModel.find({category: "Personal Care"}).sort({[sortBy]:order==="asc"? 1:-1}).limit(pageSize).skip(pageSize*(page-1))
//     }
//    else if (category=="Treatments"){
//         data = await productModel.find({category: "Treatments"}).sort({[sortBy]:order==="asc"? 1:-1}).limit(pageSize).skip(pageSize*(page-1))
//     }
//    else if (category=="Mom & Baby"){
//         data = await productModel.find({category: "Mom & Baby"}).sort({[sortBy]:order==="asc"? 1:-1}).limit(pageSize).skip(pageSize*(page-1))
//     }
//     else if (category=="Covid Essentials"){
//         data = await productModel.find({category: "Covid Essentials"}).sort({[sortBy]:order==="asc"? 1:-1}).limit(pageSize).skip(pageSize*(page-1))
//     }
    // else{
    // }



    console.log(data)
   return res.send(data)
   

 } catch (error) {
    console.log(error)
    return res.status(400).send({status : "Error Found", data: "Not Found"});
 }
}


