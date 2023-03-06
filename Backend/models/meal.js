const mongoose = require('mongoose')

const repasSchema= mongoose.Schema({

    name:{
            type: String,
            required: true,
            trim: true
        },
    images:{
            type: Array,
            required: true,
            trim: true
        },
      description: {
            type: String,
            required: true,
            trim: true
        },

      price: 
        {
            type: Number,
            required: true,
            trim: true
        },
      category: 
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "category" 
        }
      

})
module.exports = mongoose.model('meal', repasSchema)