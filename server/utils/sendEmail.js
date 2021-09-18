const nodemailer = require('nodemailer');

const sendEmail = async (options) => {
  //Create a transporter
  const transport = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  });
  //define email options
  const mailOptions = {
    from: 'CheckItNow <remind@CKN.com>',
    to: options.email,
    subject: options.subject,
    text: options.message,
    html: options.html,
  };
  //actually send the email
  await transport.sendMail(mailOptions);
};

module.exports = sendEmail;
