const sgMail = require('@sendgrid/mail')
sgMail.setApiKey('SENDGRID_API_KEY')
const msg = {
  to: 'vmatsius@gmail.com', // Change to your recipient
  //from: 'jazz7000@hotmail.com', // Change to your verified sender
  from: {
    email: 'jazz7000@hotmail.com',
    name: 'Vadzim Matsiushonak'
},
  subject: 'Sending with SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
}
sgMail
  .send(msg)
  .then(() => {
    console.log('Email sent')
  })
  .catch((error) => {
    console.error(error)
  })