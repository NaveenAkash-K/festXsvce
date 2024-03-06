var http = require("http"),
  fs = require("fs"),
  ccav = require("./ccavutil.js"),
  path = require("path"),
  express = require("express"),
  qs = require("querystring");

const app = express();

var uuidv4 = require("uuid").v4;

exports.postReq = function (request, response) {
  // 3342525
  var body = "",
    workingKey = "BC9E44F0087D201330A6DE18039F21E0", //Put in the 32-Bit key shared by CCAvenues.
    accessCode = "AVGY68LC16AH21YGHA", //Put in the Access Code shared by CCAvenues.
    encRequest = "",
    formbody = "";

  request.on("data", function (data) {
    body += data;
    var ordId = "ORD_" + uuidv4();
    var parsedData = qs.parse(body);
    console.log(parsedData.regNo);
    
    var customerId = Date.now() + "_" + parsedData.regNo;
    body += `&merchant_id=3342525
      &order_id=${ordId}
      &currency=INR
      &regNo=${parsedData.regNo}
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

  request.on("end", function () {
    response.writeHeader(200, { "Content-Type": "text/html" });
    response.write(formbody);
    response.end();
  });
  return;
};
