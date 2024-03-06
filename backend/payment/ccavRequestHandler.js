var http = require("http"),
  fs = require("fs"),
  ccav = require("./ccavutil.js"),
  path = require("path"),
  express = require("express"),
  qs = require("querystring");

var User = require("../models/user_model.js");

const app = express();

var uuidv4 = require("uuid").v4;

exports.postReq = function (request, response) {
  // 3342525
  var parsedData;
  var ordId;
  var customerId;
  var body = "",
    workingKey = "BC9E44F0087D201330A6DE18039F21E0", //Put in the 32-Bit key shared by CCAvenues.
    accessCode = "AVGY68LC16AH21YGHA", //Put in the Access Code shared by CCAvenues.
    encRequest = "",
    formbody = "";

  request.on("data", function (data) {
    body += data;
    ordId = "ORD_" + uuidv4();
    parsedData = qs.parse(body);
    customerId = Date.now() + "_" + parsedData.regNo;

    body += `&merchant_id=3342525
      &order_id=${ordId}
      &currency=INR
      &amount=1
      &redirect_url=https://technoways-svce-backend.vercel.app/ccavResponseHandler
      &cancel_url=https://technoways-svce-backend.vercel.app/ccavResponseHandler
      &language=EN
      &billing_country=India
      &customer_identifier=${customerId}`;
    encRequest = ccav.encrypt(body, workingKey);
    formbody =
      '<form id="nonseamless" method="post" name="redirect" action="https://secure.ccavenue.com/transaction/transaction.do?command=initiateTransaction"/> <input type="hidden" id="encRequest" name="encRequest" value="' +
      encRequest +
      '"><input type="hidden" name="access_code" id="access_code" value="' +
      accessCode +
      '"><script language="javascript">document.redirect.submit();</script></form>';
  });

  request.on("end", async function () {
    console.log("Object");
    console.log({
      username: parsedData.billing_name,
      customerId: customerId,
      regNo: parsedData.regNo,
      address: parsedData.billing_address,
      phoneNo: parsedData.billing_tel,
      city: parsedData.billing_city,
      college: parsedData.college,
      department: parsedData.department,
      email: parsedData.billing_email,
      ordId: ordId,
      eventDetails: "dummy",
      amount: 1,
      year: parsedData.year,
      paid: false,
    });
    
    new User({
      username: parsedData.billing_name,
      customerId: customerId,
      regNo: parsedData.regNo,
      address: parsedData.billing_address,
      phoneNo: parsedData.billing_tel,
      city: parsedData.billing_city,
      college: parsedData.college,
      department: parsedData.department,
      email: parsedData.billing_email,
      ordId: ordId,
      eventDetails: "dummy",
      amount: 1,
      year: parsedData.year,
      paid: false,
    })
      .save()
      .then((result) => {
        console.log("result");
        console.log(result);
      })
      .catch((error) => {
        console.log("error");
        console.log(error);
      });
    response.writeHeader(200, { "Content-Type": "text/html" });
    response.write(formbody);
    response.end();
  });
  return;
};
