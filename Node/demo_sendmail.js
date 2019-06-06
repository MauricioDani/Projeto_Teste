var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'Hotmail',
  auth: {
    user: 'mauricio_dan@hotmail.com',
    pass: '731946abcD'
  }
});

var mailOptions = {
  from: 'mauricio_dan@hotmail.com',
  to: 'mauricio.dani@totvs.com,rhyan.silva@totvs.com, everson.almeida@totvs.com',
  subject: 'Sending Email using Node.js',
  text: 'Teste de envio de e-mail!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
}); 