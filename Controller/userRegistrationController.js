import netmedsuser from '../Models/usermodel.js'
import jwt from 'jsonwebtoken'
import jwt_decode from "jwt-decode";

const jsontoken = (user) => {
  return jwt.sign({ user }, 'confidential')
}
// Registration started
export const Signup = async (req, res) => {
  try {
    let user = await netmedsuser.findOne({ email: req.body.email })
    if (user) return res.status(400).send({ message: 'User is already exist' })
    user = await netmedsuser.create(req.body)
    return res.status(201).send({ email: user.email, id: user._id })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}
// Login started

export const Login = async (req, res) => {
  try {
    const user = await netmedsuser.findOne({ email: req.body.email })

    if (!user)
      return res
        .status(404)
        .send({ message: 'Please enter valid email and password' })

    const match = user.checkPassword(req.body.password)

    if (!match)
      return res
        .status(404)
        .send({ message: 'Please enter valid email and password' })

    const token = jsontoken(user)

    return res.status(200).send({ token: token })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

export const Decode = (req, res) =>{
   try{
    if(req.body.token){
      const user = jwt_decode(req.body.token)
      return res.status(200).send(user)
    }else{
      res.status(400).send("error")
    }
   }catch(err){
    res.status(500).send(err)
   }
}
