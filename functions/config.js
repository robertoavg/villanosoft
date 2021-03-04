
const nodemailer = require('nodemailer');
require('dotenv').config()

var transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  service: 'gmail',
  logger: true,
  debug: true,
  secureConnection: false,
  ignoreTLS: true,
  auth: {
    user: process.env.EMAIL, // your email address to send email from
    pass: process.env.PASS // your gmail account password
  }
});

module.exports = transporter;