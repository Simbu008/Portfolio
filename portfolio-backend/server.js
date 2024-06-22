require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
const port = 5000;

// Middleware
// Cross-origin resource sharing(CORS)
// mechanism that allows a web page to access restricted resources from a server on a domain different than the domain that served the web page.

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Server is started");
});

//POST route to send email
app.post("/send", (req, res) => {
  const { fname, lname, email, number, message } = req.body;

  console.log(req.body);
  //Create a transporter
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASS,
    },
  });

  //   Email options
  const MialOptions = {
    from: email,
    to: process.env.EMAIL,
    subject: `Contact form submission from ${fname}`,
    text: `You have received a new message from ${fname} ${lname} (${email}):\n\n ${message}\n\n for furter contact :${number}`,
  };

  //   Send email
  transporter.sendMail(MialOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.status(200).send("Message sent successfully");
  });
});

// Start server

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
