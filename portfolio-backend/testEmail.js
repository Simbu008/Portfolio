require("dotenv").config();
const nodemailer = require("nodemailer");

console.log(process.env.EMAIL);
console.log(process.env.PASS);

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASS,
  },
});

const mailOptions = {
  from: process.env.EMAIL,
  to: process.env.EMAIL,
  subject: "Test Email",
  text: "This is a test email",
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log("Error:", error);
  }
  console.log("Email sent:", info.response);
});
