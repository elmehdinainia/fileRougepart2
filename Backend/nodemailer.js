const nodemailer = require('nodemailer')

        let transport = nodemailer.createTransport({
            service: "gmail",
            auth: {
            user: "nainiaamehdi25@gmail.com",
            pass: "wzakmqattzeawzsy",
            }
        })

module.exports = {
    transport
}
   