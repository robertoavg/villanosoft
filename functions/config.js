const functions = require("firebase-functions");
const nodemailer = require('nodemailer');
//require('dotenv').config()

const mail = functions.config().correo.email;
const contra = functions.config().correo.pass;

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
    user: mail, // your email address to send email from
    pass: contra // your gmail account password
  }
});

module.exports = transporter;