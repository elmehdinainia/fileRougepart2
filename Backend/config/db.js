const mongoose = require('mongoose')

const DB = mongoose.connect(process.env.DATABASE, () => {
  console.log('Database Connected succesuly')
})

module.exports = DB