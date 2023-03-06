const mongoose = require('mongoose')

const addressSchema = mongoose.Schema({
  city: {
    type: String,
    required: true, 
    trim: true
  },
  cartier: {
    type: String,
    required: true,
    trim: true
  },
})

module.exports = mongoose.model('Address', addressSchema)