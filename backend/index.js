var express = require("express");
var app = express();
var http = require("http"),
  fs = require("fs"),
  ccav = require("./payment/ccavutil.js"),
  qs = require("querystring"),
  ccavReqHandler = require("./payment/ccavRequestHandler.js"),
  ccavResHandler = require("./payment/ccavResponseHandler.js");

app.use(express.static("public"));
app.set("views", __dirname + "./payment/public");
app.engine("html", require("ejs").renderFile);

app.get("/about", function (req, res) {
  res.render("dataFrom.html");
});

app.post("/ccavRequestHandler", (req, res) => {
  ccavReqHandler.postReq(req, res);
});

app.post("/checkout", (req, res) => {});

app.post("/ccavResponseHandler", (req, res) => {
  try {
    ccavResHandler.postRes(req, res);
  } catch (e) {
    response.writeHeader(400, { "Content-Type": "text/html" });
    res.send(`
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
  }
});

app.listen(3001);
