require("dotenv").config(); // Load environment variables from .env
const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");

//routes
const labelRoutes = require("./Label_backend/routes/LabelRoutes");
const emailRoutes = require("./Email_backend/routes/emailRoutes");

// Allow requests from all origins
app.use(cors());

// Middleware to parse JSON data from the request body
app.use(express.json());

// NodeMailer Transporter
const transporter = nodemailer.createTransport({
  service: "gmail", // Or your email service provider
  auth: {
    user: process.env.EMAIL_USER, // Use environment variable
    pass: process.env.EMAIL_PASS, // Use environment variable
  },
});

// Route to handle form submission
app.post("/send-email", (req, res) => {
  console.log("Received data:", req.body); // Log incoming data
  const { name, email, message } = req.body;

  const mailOptions = {
    from: "rahulapps29@gmail.com",
    to: "agrawal.shivam206@gmail.com",
    subject: "Sukrati: New Form Submission",
    text: `You have a new form submission:\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error); // Log the error
      return res.status(500).send("Error sending email: " + error.message);
    }
    res.send("Email sent successfully!");
  });
});

// Route to handle form submission
app.post("/send-email_chandan", (req, res) => {
  console.log("Received data:", req.body); // Log incoming data
  const { name, email, message } = req.body;

  const mailOptions = {
    from: "rahulapps29@gmail.com",
    to: "chandankumar0879@gmail.com",
    subject: "SSRA & Company: New Form Submission",
    text: `You have a new form submission:\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error); // Log the error
      return res.status(500).send("Error sending email: " + error.message);
    }
    res.send("Email sent successfully!");
  });
});

app.use("/label", labelRoutes);
app.use("/mailer", emailRoutes); // mount email routes

const PORT = 4028;
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
