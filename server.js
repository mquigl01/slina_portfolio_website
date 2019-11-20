/**
* Name: Mackenzie Quigley
* Student ID: 1001753
* Email: mquigl01@uoguelph.ca
* Course: CIS*2750
* Date: 04/05/2019
* Description: the server side javascript file
**/

'use strict'

const express = require("express");
const app     = express();
const path = require('path');
const port = process.env.PORT || 5000;
var nodemailer = require('nodemailer');
let email_password = "slinafrich1999";

var bodyParser = require('body-parser');
app.use( bodyParser.json() );
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'client/build')));


if(process.env.NODE_ENV === 'production') {  app.use(express.static(path.join(__dirname, 'client/build')));  
  app.get('*', (req, res) => {    res.sendfile(path.join(__dirname = 'client/build/index.html'));  
})}


var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'slinafrichautoreply@gmail.com',
    pass: email_password
  }
});

app.post('/api/v1/SendEmail', function(req, res) {

    var mailOptions = {
      from: 'slinafrichautoreply@gmail.com',
      to: 'mackenziequigley@outlook.com',
      subject: "Contact Form Filled By: " + req.body.firstname + " " + req.body.lastname,
      text: "Hi Slina!\n" + req.body.firstname + " " + req.body.lastname + " (" + req.body.email + 
      ") sent you the following message:\n\n" + req.body.message
    };

    transporter.sendMail(mailOptions, function(error, info) {
      if (error) {
        console.log(error);
        res.send("{\"Error\":\"" + error + "\"}");
      } else {
        console.log('Email sent: ' + info.response);
        res.send("{\"Error\":\"None\"}");
      }
    });
});


app.listen(port);
console.log('Running app at localhost: ' + port);
