const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
require("dotenv").config();

// Nodemailer transporter setup
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Common sendEmail function
const sendEmail = (to, subject, data, res) => {
  const { name, email, message } = data;

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to,
    subject,
    text: `You have a new form submission:\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
      return res.status(500).send("Error sending email: " + error.message);
    }
    res.send("Email sent successfully!");
  });
};

// Routes
router.post("/send-email", (req, res) => {
  sendEmail(
    "agrawal.shivam206@gmail.com",
    "Sukrati: New Form Submission",
    req.body,
    res
  );
});

router.post("/send-email_chandan", (req, res) => {
  sendEmail(
    "chandankumar0879@gmail.com",
    "SSRA & Company: New Form Submission",
    req.body,
    res
  );
});

module.exports = router;
