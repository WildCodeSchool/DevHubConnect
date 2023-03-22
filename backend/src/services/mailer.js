const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = nodemailer.createTransport({
  host: "in-v3.mailjet.com",
  port: process.env.SMTP_PORT,
  secure: true,
  auth: {
    user: "de26d2bb47db0b164a06d5ee1db30ec0",
    pass: "f6c7b4b91d81e6ad3958e699840eb810",
  },
});
module.exports = transporter;
