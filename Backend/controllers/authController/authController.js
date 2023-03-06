const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const storage = require('local-storage')
const User = require('../../models/userModel')
const Role = require('../../models/roleModel')
const mainMail = require('../../middleware/mailer')

const registerUser = async (req, res) => {
  const { first_name, last_name, phone, email, password, confirm_password } = req.body

  if (first_name === '' || last_name === '' || phone === '' || email === '' || password === '' || confirm_password === '') throw Error('Please fill all the fields')


  const userExists = await User.findOne({ email })
  const phoneExists = await User.findOne({ phone })

  if (userExists) { throw Error('User already Exists') }
  else {
    if (phoneExists) throw Error('Phone the User already Exists')
    else {
      // Password Hash 
      const salt = await bcrypt.genSalt(10)
      const password_Hash = await bcrypt.hash(password, salt)
      const role = "638f45b410a60d0c0019353a"

      const user = await User.create({
        first_name,
        last_name,
        phone,
        email,
        password: password_Hash,
        role,
        verification: false,
        isBanned: false
      })

      if (user) {
        mainMail.nodemailler('verify-email', email)
        throw Error('Check Your Email')
      }

      if (!user) throw Error('Invalid User Data')
    }
  }
}

const verifyEmail = async (req, res) => {
  const verify_email = await jwt.verify(req.params.token, process.env.SECRET)

  const verifyUser = await User.findOne({ email: verify_email.email })
  if (verifyUser && verifyUser.verification === true) res.redirect('http://localhost:5173/login');

  const verification_email = await User.updateOne({ email: verify_email.email }, { $set: { verification: true } })
  if (verification_email) res.redirect('http://localhost:5173/login');
  if (verifyUser && verifyUser.verification === true) throw Error('You Are Registed')
  if (!verification_email) throw Error("You can't to active your account")
}

const loginUser = async (req, res) => {
  const { email, password } = req.body

  if (email === '' || password === '') throw Error('Please Fill All The Fields')

  const user = await User.findOne({ email })

  if (!user) throw Error('Email or password is incorrect')
  if (!user.verification) throw Error('Check Your Email To Active Your Account')
  if (user.isBanned) throw Error('Your Account is Banned')
  const correctPassword = await bcrypt.compare(password, user.password)
  if (user && correctPassword) {
    const role = await Role.findById({ _id: user.role })
    const token = generateToken(user.id)
    storage('token', token)
    res.json({
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email,
      role: role.name,
      token: token
    })

  }
  else {
    throw Error('Invalid Creadtials')
  }
}

const resetPassword = async (req, res) => {
  const { last_password, nouveau_password, confirm_password } = req.body

  if (last_password === '' || nouveau_password === '' || confirm_password === '') throw Error('Please Fill All The Fields')
  if (nouveau_password != confirm_password) throw Error('Password Not Matched')

  const token = storage('token')
  const verifyToken = await jwt.verify(token, process.env.SECRET)
  const find_User_id = await User.findById(verifyToken.id)

  if (find_User_id) {
    const pass_correct = await bcrypt.compare(last_password, find_User_id.password)
    if (!pass_correct) throw Error('Password Not Correct')
    const salt = await bcrypt.genSalt(10)
    const new_Pass_Hashed = await bcrypt.hash(nouveau_password, salt)
    const newPassword = await User.updateOne({ _id: find_User_id._id }, { $set: { password: new_Pass_Hashed } })
    res.send('Password Your Changed')
  }
}

const forgotPassword = async (req, res) => {
  const { email } = req.body

  if (email === '') throw Error('Enter Your Email')
  const forgot_Password_email = await User.findOne({ email })

  if (!forgot_Password_email) throw Error('User Not Found')
  mainMail.main('verify-forgot-password', email)
  throw Error('Check Your Email')
}

const verifyForgotPassword = async (req, res) => {
  const token = req.params.token
  const verify_token = await jwt.verify(token, process.env.SECRET)
  if (verify_token) {
    const verify_token_email = await User.findOne({ email: verify_token.email })
    const new_token = await jwt.sign({ id: verify_token_email.id }, process.env.SECRET)
    storage('new-token', new_token)
    res.redirect('http://localhost:5173/form-forgot-password/');
  } else res.send('Token Not Found')
}

const formForgotPassword = async (req, res) => {
  const { password, confirm_password } = req.body
  const token = storage('new-token')

  if (token == '' || password == '' || confirm_password == '') throw Error('Please fill all the fields to change your Password')
  if (password != confirm_password) throw Error('Password not mathed')
  const verify_form_token = await jwt.verify(token, process.env.SECRET)
  if (verify_form_token) {
    const find_forgot_user = await User.findById(verify_form_token.id)
    if (!find_forgot_user) throw Error('Error, User not Foun, replay to check your email')
    const salt = await bcrypt.genSalt(10)
    const forgotPass_hashed = await bcrypt.hash(password, salt)
    const update_password = await User.updateOne({ _id: find_forgot_user._id }, { $set: { password: forgotPass_hashed } })
    if (update_password) {
      res.send('Your Password is updated')
      // res.redirect('http://localhost:5173/login')
    } else throw Error('Not Update Password')
  }
  else res.send('Token Not Found')
}

const logout = async (req, res) => {
  storage.clear()
  res.send('Your are Logout')
}

const generateToken = (id) => {
  const token = jwt.sign({ id }, process.env.SECRET, {
    expiresIn: '30d'
  })

  return token
}

module.exports = {
  registerUser,
  verifyEmail,
  loginUser,
  resetPassword,
  forgotPassword,
  verifyForgotPassword,
  formForgotPassword,
  logout
}