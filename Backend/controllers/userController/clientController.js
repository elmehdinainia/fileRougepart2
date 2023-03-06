const jwt = require('jsonwebtoken')
var storage = require('local-storage')
const User = require('../../models/userModel')
const Role = require('../../models/roleModel')
const { role } = require('../../models')
const orderModel = require("../../models/orderModel")
const statusModel = require("../../models/statusModel")


const clientUser = async (req, res) => {
  const token = storage('token')
  const token_user = await jwt.verify(token, process.env.SECRET)
  const user = await User.findById(token_user.id)
  const role_user = await Role.findById(user.role)
  if (role_user.name != "client") throw Error("You Can't To Acces in This Page")
  res.json({
    first_name: user.first_name,
    last_name: user.last_name,
    email: user.email,
    phone: user.phone,
    role: role_user.name
  })
}

const clientMakeOrder = (req, res) => {
  if(req.body) {
    const orderStatus = statusModel.findOne({ $where: { name : req.body.status } })
    const clientorder = User.findOne({ $where: { email : req.body.client } })
  const data = {
    client: clientorder._id,
    meals:  clientorder._id,
    livereur:  clientorder._id,
    address:  clientorder._id,
    totalPrice: req.body.totalPrice,
    status : orderStatus._id
  }
  console.log(data)
    orderModel.create(data).then(() => {
      res.send("new order created succefully")
    }).catch((err) => {
      res.status(400).json(err)
    })
    console.log(req.body)
  } else {
    return res.status(400).json({message: "all fileds are required"})
  }
}

const clientShowOrders = (req, res) => {
  orderModel.find({ raw: true, nest: true })
      .then((data)=>{
        res.send(data)
      }).catch((err) => {
        res.status(400).json(err)
  })
}

module.exports = {
  clientUser,
  clientMakeOrder,
  clientShowOrders
}