const mongoose = require('mongoose')

const ordertimeSchema= mongoose.Schema({

    repas: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "repas"    
        }
    ],
    Quntite: [
        {
            type: Number,
            required: true,
            trim: true
        }
    ],
    order: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Order"
        }
    ],
    visible:{
        type:Boolean,
    }
  

})
module.exports = mongoose.model('ordertime', ordertimeSchema)