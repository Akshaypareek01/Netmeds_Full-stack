import express from 'express'
import connection from './Configs/db.js'
import cors from 'cors'
import { cartProduct } from './Controller/cartcontroller.js'
import { Products } from './Controller/productcontroller.js'
import { Signup, Login } from './Controller/userRegistrationController.js'

const app = express()
app.use(express.json())
app.use(cors())

// Post signup login data
app.post('/signup', Signup)
app.post('/login', Login)

app.get('/cart', cartProduct)
app.get('/product', Products)

app.listen(8080, () => {
  try {
    connection()
  } catch (e) {
    console.log(e)
  }
})
