const mongoose = require('mongoose')

const DB = mongoose.connect(process.env.DATABASE, () => {
  console.log('Database Connected')
})

module.exports = DB