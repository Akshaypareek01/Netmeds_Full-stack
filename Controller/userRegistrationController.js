import User from '../Models/usermodel'
import jwt from 'jsonwebtoken'

const jsontoken = (user) => {
  return jwt.sign({ user }, 'confidential')
}
// Registration started
export const Signup = async (req, res) => {
  try {
    let user = User.findOne({ email: req.body.email })
    if (user) {
      return res.status(400).send({ message: 'User is already exist' })
    }
    user = await User.create(req.body)
    return res.status(201).send({ email: user.email, id: user._id })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}
// Login started

export const Login = async (req, res) => {
  try {
    let user = User.findOne({ email: req.body.email })
    if (!user)
      return res
        .status(404)
        .send({ message: 'Please enter valid email and password' })

    const check = user.checkPassword(req.body.password)

    if (!check) {
      return res
        .status(404)
        .send({ message: 'Please enter valid email and password' })
    }

    const token = jsontoken(user)
    return res.status(200).send({ token: token })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}
