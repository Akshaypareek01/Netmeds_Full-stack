import express from 'express'
import connection from './Configs/db.js'
import cors from 'cors'
import { Signup, Login } from './Controller/userRegistrationController.js'

const app = express()
app.use(express.json())
app.use(cors())

// Post signup login data
app.post('/signup', Signup)
app.post('/login', Login)

app.listen(8080, () => {
  try {
    connection()
  } catch (e) {
    console.log(e)
  }
})
