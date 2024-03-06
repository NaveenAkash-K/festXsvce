var http = require("http"),
  fs = require("fs"),
  ccav = require("./ccavutil.js"),
  mongoose = require("mongoose"),
  express = require("express"),
  User = require("../models/user_model.js");
qs = require("querystring");

exports.postRes = function (request, response) {
  var ccavEncResponse = "",
    ccavResponse = "",
    workingKey = "BC9E44F0087D201330A6DE18039F21E0", //Put in the 32-Bit key shared by CCAvenues.
    ccavPOST = "";

  request.on("data", function (data) {
    ccavEncResponse += data;
    ccavPOST = qs.parse(ccavEncResponse);
    var encryption = ccavPOST.encResp;
    ccavResponse = ccav.decrypt(encryption, workingKey);
  });

  request.on("end", async function () {
    var pData = "";
    response.writeHeader(200, { "Content-Type": "text/html" });
    var parsedData = qs.parse(ccavResponse);
    console.log(parsedData.regNo);
    console.log(parsedData);

    if (parsedData.order_status === "Failure") {
      response.write(`
        <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Payment Failed</title>
        <style>
            body {
                font-family: 'Arial', sans-serif;
                background-color: #f4f4f4;
                margin: 0;
                padding: 0;
                display: flex;
                align-items: center;
                justify-content: center;
                height: 100vh;
            }
    
            .container {
                text-align: center;
                padding: 20px;
                border-radius: 10px;
                background-color: #fff;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                max-width: 400px;
                width: 100%;
            }
    
            h1 {
                color: #e74c3c;
            }
    
            p {
                color: #333;
            }
    
            .failure-icon {
                color: #e74c3c;
                font-size: 48px;
                margin-bottom: 10px;
            }
    
            .btn {
                display: inline-block;
                padding: 10px 20px;
                background-color: #e74c3c;
                color: #fff;
                text-decoration: none;
                border-radius: 5px;
                transition: background-color 0.3s;
            }
    
            .btn:hover {
                background-color: #c0392b;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="failure-icon">&#10008;</div>
            <h1>Payment Failed</h1>
            <p>Unfortunately, there was an issue processing your payment. Please try again later or contact support.</p>
            <a href="#" class="btn">Retry</a>
        </div>
    </body>
    </html>
    `);
      response.end();
      return;
    } else {
      console.log("Response");
      console.log(parsedData);

      User.updateOne(
        { email: parsedData.billing_email },
        { $set: { paid: true } }
      );

      // console.log(user);

      response.write(`
        <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Payment Successful</title>
          <style>
              body {
                  font-family: 'Arial', sans-serif;
                  background-color: #f4f4f4;
                  margin: 0;
                  padding: 0;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  height: 100vh;
              }
      
              .container {
                  text-align: center;
                  padding: 20px;
                  border-radius: 10px;
                  background-color: #fff;
                  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                  max-width: 400px;
                  width: 100%;
              }
      
              h1 {
                  color: #4CAF50;
              }
      
              p {
                  color: #333;
              }
      
              .success-icon {
                  color: #4CAF50;
                  font-size: 48px;
                  margin-bottom: 10px;
              }
      
              .btn {
                  display: inline-block;
                  padding: 10px 20px;
                  background-color: #4CAF50;
                  color: #fff;
                  text-decoration: none;
                  border-radius: 5px;
                  transition: background-color 0.3s;
              }
      
              .btn:hover {
                  background-color: #45a049;
              }
          </style>
      </head>
      <body>
          <div class="container">
              <div class="success-icon">&#10004;</div>
              <h1>Payment Successful</h1>
              <p>Your payment was successfully processed. The QR code for your ticket has been sent to ${parsedData.billing_email}.</p>
              <a href="#" class="btn">Continue</a>
          </div>
      </body>
      </html>
      `);
      response.end();
    }
  });
};
