import express from 'express'
import connection from './Configs/db.js'
import cors from 'cors'
import { cartProduct } from './Controller/cartcontroller.js'
import { Products } from './Controller/productcontroller.js'


const app = express()
app.use(express.json())
app.use(cors());

app.get('/cart',cartProduct)
app.get('/product',Products)
// app.get('/prodasc',ProductsAsc)

app.listen(8080,()=>{
    try{
        connection();
    }catch(e){
        console.log(e)
    }
})
