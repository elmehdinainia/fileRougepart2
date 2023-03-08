const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
  first_name: {
    type: String,
    required: true,
    trim: true
  },
  last_name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    trim: true
  },
  phone: {
    type: String,
    required: true,
    trim: true
  },
  address: {
    type: String,
    required: true,
    trim: true
  },
  
  role: {
    
    type : String, 
    required:true,
    max:255,
    default: 'client'
    
  },
  verification: Boolean,
  isBanned: Boolean
})

module.exports = mongoose.model('User', userSchema)