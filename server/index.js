const path = require('path');
const express = require('express');
const transporter = require('./config');
require('dotenv').config();
const app = express();

const buildPath = path.join(__dirname, '..', 'build');
app.use(express.json());
app.use(express.static(buildPath));

app.post('/send', (req, res) => {
  try {
    console.log("EMAIL: " + process.env.email + " CONTRA: " + process.env.password);
    const mailOptions = {
      from: req.body.email, // sender address
      to: process.env.email, // list of receivers
      subject: req.body.subject, // Subject line
      html: `
      <p>Nueva solicitud de contacto.</p>
      <h3>Detalle de contacto</h3>
      <ul>
        <li>Nombre: ${req.body.name}</li>
        <li>Email: ${req.body.email}</li>
        <li>Asunto: ${req.body.subject}</li>
        <li>Mensaje: ${req.body.message}</li>
      </ul>
      `
    };

    transporter.sendMail(mailOptions, function (err, info) {
      console.log("entró al transportador");
      console.log(transporter.options.host);
      if (err) {
        res.status(500).send({
          success: false,
          message: 'Algo salió mal. Favor de intentar de nuevo mas tarde.'
        });
        console.log(err);
      } else {
        res.send({
          success: true,
          message: '¡Correo enviado! Me contactaré contigo a la brevedad.'
        });
      }
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: 'Algo salió mal. Favor de intentar de nuevo mas tarde.'
    });
    console.log(error);
  }
});

const port = process.env.PORT || 80;

app.listen(port, () => {
  console.log('server iniciado en puerto: ' + port);
});