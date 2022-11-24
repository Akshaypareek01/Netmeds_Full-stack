const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const userDataschema = new mongoose.Schema(
  {
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

module.exports = netmedsuser
