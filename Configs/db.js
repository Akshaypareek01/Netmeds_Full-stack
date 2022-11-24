import mongoose from 'mongoose'
const connection=async()=>{
   try{
     mongoose.connect("mongodb+srv://saktiprasad:Sakti2000@backend2000.kmjifsg.mongodb.net/netmeds?retryWrites=true&w=majority",{
      useUnifiedTopology:true,useNewUrlParser:true
    })
    console.log("DB CONNECTION ESTABLISHED")
   }catch(err){
        console.log(err)
   }
}

export default connection