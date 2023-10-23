const express = require('express');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();

// Middleware to parse JSON data
app.use(express.json());

// Endpoint to handle sending an email
app.post('/api/contact', (req, res) => {
  // Extract form data from request body
  const { name, email, message } = req.body;

  // Create a transporter object using your email credentials
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  // Compose the email message
  const mailOptions = {
    from: 'myportfolio@gmail.com',
    to: 'miriamsilvaaa484@gmail.com',
    subject: 'New Contact Form Submission',
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error occurred while sending email:', error);
      res.status(500).json({message:'An error occured try again'});
    } else {
      console.log('Email sent:', info.response);
      res.status(200).json({message:'Message sent successfully'});
    }
  });
});

// Start the server
app.listen(3001, () => {
  console.log('Server is running on port 3001');
});


