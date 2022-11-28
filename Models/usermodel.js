import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
const userDataschema = new mongoose.Schema(
  {
    name:{type: String},
    email: { type: String, required: true },
    password: { type: String, required: true },
  },
  { versionKey: false, timestamps: true },
)

userDataschema.pre('save', function (next) {
  if (!this.isModified('password')) return next()

  let hashedPassword = bcrypt.hashSync(this.password, 8)
  this.password = hashedPassword
  return next()
})

userDataschema.methods.checkPassword = function (password) {
  return bcrypt.compareSync(password, this.password)
}

const netmedsuser = mongoose.model('user', userDataschema)

export default netmedsuser

// 5d3bdd8abb7d9885d78a github oauth client id
