require("dotenv").config(); // Load environment variables from .env
const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

//routes
const labelRoutes = require("./Label_backend/routes/LabelRoutes");
const emailRoutes = require("./Email_backend/routes/emailRoutes");
const urlRoutes = require("./Url_backend/routes/urlRoutes");

// Allow requests from all origins
app.use(cors());

// Middleware to parse JSON data from the request body
app.use(express.json());

mongoose.connect(process.env.MONGO_URI);

app.use("/label", labelRoutes);
app.use("/mailer", emailRoutes); // mount email routes
app.use("/urls", urlRoutes);

const PORT = 4028;
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
