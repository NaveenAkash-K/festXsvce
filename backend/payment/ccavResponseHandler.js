var http = require("http"),
  fs = require("fs"),
  ccav = require("./ccavutil.js"),
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

  request.on("end", function () {
    var pData = "";
    response.write(ccavResponse);
    pData = "<table border=1 cellspacing=2 cellpadding=2><tr><td>";
    pData = pData + ccavResponse.replace(/=/gi, "</td><td>");
    pData = pData.replace(/&/gi, "</td></tr><tr><td>");
    pData = pData + "</td></tr></table>";
    htmlcode =
      '<html><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"><title>Response Handler</title></head><body><center><font size="4" color="blue"><b>Response Page</b></font><br>' +
      pData +
      "</center><br></body></html>";
    // response.writeHeader(200, { "Content-Type": "text/html" });
    response.writeHeader(200, { "Content-Type": "text" });
    // response.write("1. " + htmlcode + "\n" + "2. " + pData);
    // response.write(htmlcode);
    
  //   response.write(`
  //   <!DOCTYPE html>
  // <html lang="en">
  // <head>
  //     <meta charset="UTF-8">
  //     <meta name="viewport" content="width=device-width, initial-scale=1.0">
  //     <title>Payment Successful</title>
  //     <style>
  //         body {
  //             font-family: 'Arial', sans-serif;
  //             background-color: #f4f4f4;
  //             margin: 0;
  //             padding: 0;
  //             display: flex;
  //             align-items: center;
  //             justify-content: center;
  //             height: 100vh;
  //         }
  
  //         .container {
  //             text-align: center;
  //             padding: 20px;
  //             border-radius: 10px;
  //             background-color: #fff;
  //             box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  //             max-width: 400px;
  //             width: 100%;
  //         }
  
  //         h1 {
  //             color: #4CAF50;
  //         }
  
  //         p {
  //             color: #333;
  //         }
  
  //         .success-icon {
  //             color: #4CAF50;
  //             font-size: 48px;
  //             margin-bottom: 10px;
  //         }
  
  //         .btn {
  //             display: inline-block;
  //             padding: 10px 20px;
  //             background-color: #4CAF50;
  //             color: #fff;
  //             text-decoration: none;
  //             border-radius: 5px;
  //             transition: background-color 0.3s;
  //         }
  
  //         .btn:hover {
  //             background-color: #45a049;
  //         }
  //     </style>
  // </head>
  // <body>
  //     <div class="container">
  //         <div class="success-icon">&#10004;</div>
  //         <h1>Payment Successful</h1>
  //         <p>Your payment was successfully processed. The QR code for your ticket has been sent to your Email.</p>
  //         <a href="#" class="btn">Continue</a>
  //     </div>
  //     <p>${pData}</p>
  // </body>
  // </html>
  // `);
    response.end();
  });
};
