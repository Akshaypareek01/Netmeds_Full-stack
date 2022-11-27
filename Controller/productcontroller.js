import productModel from "../Models/productmodel.js";

const categOption = [
    "Personal Care","Treatments","Mom & Baby","Covid Essentials"]

const manufacturer=[]

export const Products=async(req,res) =>{
 try {
    let {page=1,sortBy="_id",order="asc",pageSize=20,startPoint=0, endPoint=Infinity,category="all",sub_category,manufacturer}=req.query
    
    console.log(req.query);
    let filter = {
        $and: [
            {
            actual_price: {$gt: startPoint }
        },
            {
            actual_price: {$lt: endPoint }
        }
    ],
    category : {$in: (category=="all")?categOption:category.split(",")},

    

    }

    // let filterByCategory ={
    // }
    // category === "All" ? (category=[...categOption]):(genre=req.query.genre.split(","))

                        //  {
                            // productType: {$in: (productType=="all")?ProdctTypeArray:productType.split(",")}
                        //  }
        //                  {
        //                    feature: {$in: (feature=="all")?Feature:feature.split(",")}
        //                  },
        //                   {
        //                    formulation: {$in: (formulation=="all")?Formulation:formulation.split(",")}
        //                  },
        //                  {
        //                    conern: {$in: (conern=="all")?Conern:conern.split(",")}
        //                  }


    let data = "";
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
        data = await productModel.find(filter).sort({[sortBy]:order==="asc"? 1:-1}).limit(pageSize).skip(pageSize*(page-1))
    // }



    console.log(data)
   return res.send(data)
   

 } catch (error) {
    console.log(error)
    return res.status(400).send({status : "Error Found", data: "Not Found"});
 }
}





// async function search( req,res){
 

//     // Face Care
//     let ProdctTypeArray = facecareData.ProdctTypeArray;
//     let Feature =facecareData.Feature
//     let Formulation=facecareData.Formulation
//     let Conern = facecareData.Conern;
 
 
//    let {
 
//      search = '',
//      sortOrder = '',
//      productType="all",
//      feature="all",
//      formulation="all",
//      conern="all",
//      cat=""
//    } = req.query
 
   
 
   
//    try{
 
//          var s = await data.find(
//            {
//             //  $and: [
//             //      // condition 1
 
//             //      { 
//             //        cat:cat
//             //    },
 
//             //      { 
//             //          name: { 
//             //              $regex:search ,$options:"i"
//             //          },
//             //      },
//                  // condition 2
//               
 
                 
                 
//              ]
//          }
//          )
         
//          var main =  (sortOrder==="")?s:s.sort((a,b)=>{
//              return (sortOrder==="low")?(a.price-b.price):(b.price-a.price);
//          })
 
//          console.log(s+"nklknk");
 
       
       
 
//        res.send(
//          main
//       );
 
   
 
 
//    }catch(e){
//      res.send(
//        {}
//    );
 
//     console.log(e)
 
//    }
 
 
 
 
//  }