import express from 'express'
import connection from './Configs/db.js'
import cors from 'cors'
import { Products } from './Controller/productcontroller.js'
import { Signup, Login } from './Controller/userRegistrationController.js'
import {addCart,cartProduct, deleteCart, updateCart} from './Controller/cartcontroller.js'


const app = express()
app.use(express.json())
app.use(cors())

// Post signup login data
app.post('/signup', Signup)
app.post('/login', Login)
app.get('/cart/:user',cartProduct);
app.post('/cart',addCart);
 app.delete('/cart/:id',deleteCart)
app.patch('/cart/:id',updateCart)
app.delete('/cart/:id',deleteCart)
app.get('/product',Products);
app.post("/product",searchProduct);
app.get('/cart', cartProduct)

app.listen(8080, () => {
  try {
    connection()
  } catch (e) {
    console.log(e)
  }
})
