const functions = require("firebase-functions");
const { CropRotateOutlined } = require('@material-ui/icons');
const nodemailer = require('nodemailer');
require('dotenv').config()
const mail = functions.config().correo.email;
const pass = functions.config().correo.pass;

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
    pass: pass // your gmail account password
  }
});

module.exports = transporter;