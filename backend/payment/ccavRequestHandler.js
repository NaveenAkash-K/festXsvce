var http = require("http"),
  fs = require("fs"),
  ccav = require("./ccavutil.js"),
  path = require("path"),
  qs = require("querystring");

exports.postReq = function (request, response) {
  fs.appendFile(
    path.join(__dirname, "./log.txt"),
    "Successfully called",
    (err) => {
      if (err) {
        throw err;
      }
    }
  );
  // 3342525
  try {
    var body = "",
      workingKey = "BC9E44F0087D201330A6DE18039F21E0", //Put in the 32-Bit key shared by CCAvenues.
      accessCode = "AVGY68LC16AH21YGHA", //Put in the Access Code shared by CCAvenues.
      encRequest = "",
      formbody = "";

    request.on("data", function (data) {
      body += data;
      encRequest = ccav.encrypt(body, workingKey);
      formbody =
        '<form id="nonseamless" method="post" name="redirect" action="https://test.ccavenue.com/transaction/transaction.do?command=initiateTransaction"/> <input type="hidden" id="encRequest" name="encRequest" value="' +
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
  } catch (e) {
    fs.appendFile(path.join(__dirname, "../log.txt"), e, (err) => {
      if (err) {
        throw err;
      }
    });
  }
};
