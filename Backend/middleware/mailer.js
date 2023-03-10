const nodemailer = require("nodemailer");
const jwt = require('jsonwebtoken');
require('dotenv').config();

function nodemailler(path, email) {
  const token = jwt.sign({ email: email }, process.env.SECRET)

  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  let info = {
    from: '"MARHABA" <nainiaamehdi25@gmail.com>',
    to: email,
    subject: "MARHABA ✔",
    html:
      `
        <div style='height: 150px; width: 100%;'>
          <h3>Hy dear,</h3>
          <p>welcome to <span style='font-weight: bold;'>MARHABA</span>, Click Button For Active Your Account.</p>
          <a href="http://localhost:${process.env.PORT}/api/auth/${path}/${token}" style="height: 60px; background-color: #199319; color: white; padding: 15px 25px; text-decoration: none; border-radius: 8px; margin-bottom: 10px; margin-top: 10px;">Active</a> 
        </div>`,
  };

  transporter.sendMail(info);

  console.log("Message sent");
}

module.exports = {
  nodemailler
}