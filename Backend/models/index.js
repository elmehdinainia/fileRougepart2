const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.user = require("./userModel")
db.role = require("./roleModel")
db.address = require('./addressModel')
db.order = require('./orderModel')
db.status = require('./statusModel')
db.meal = require('./meal')
db.category = require('./category')
db.ordertime = require('./ordertime')





db.role.estimatedDocumentCount((err, count) => {
  if (!err && count === 0) {
    new db.role({
      name: "manager"
    })
      .save(err => {
        if (err) { console.log("error", err) }
        console.log("added 'manager' to roles collection");
      });

    new db.role({
      name: "client"
    })
      .save(err => {
        if (err) { console.log("error", err) }
        console.log("added 'client' to roles collection");
      });

    new db.role({
      name: "livreur"
    })
      .save(err => {
        if (err) { console.log("error", err) }
        console.log("added 'livreur' to roles collection");
      });
  }
});

db.status.estimatedDocumentCount((err, count) => {
  if (!err && count === 0) {
    new db.status({
      name: "lancer"
    })
      .save(err => {
        if (err) { console.log("error", err) }
        console.log("added 'lancer' to status collection");
      });

    new db.status({
      name: "en cours"
    })
      .save(err => {
        if (err) { console.log("error", err) }
        console.log("added 'en cours' to status collection");
      });

    new db.status({
      name: "finish"
    })
      .save(err => {
        if (err) { console.log("error", err) }
        console.log("added 'finish' to status collection");
      });
  }
});



module.exports = db