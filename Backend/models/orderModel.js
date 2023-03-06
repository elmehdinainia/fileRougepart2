const mongoose = require('mongoose')

const orderSchema = mongoose.Schema({

  client: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
  },
  meals: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "meals"
    }
  ],
  livereur: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
  },
  address: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Address"
    }
  ],
  totalPrice: {
    type: Number,
    required: true,
    trim: true
  },
  status: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Status"
  },
  date: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('Order', orderSchema)