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
  } catch (e) {}
});

app.listen(3001);
