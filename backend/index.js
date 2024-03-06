var express = require("express");
var app = express();
var http = require("http"),
  fs = require("fs"),
  mongoose = require("mongoose"),
  ccav = require("./payment/ccavutil.js"),
  qs = require("querystring"),
  ccavReqHandler = require("./payment/ccavRequestHandler.js"),
  ccavResHandler = require("./payment/ccavResponseHandler.js");

mongoose.connect(process.env.MONGO_URI);

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
    ccavResHandler.postRes(req, res);
});

mongoose.connection.once("open", () => {
  app.listen(3001, () => {
    console.log("Server started at: https:localhost:8080");
  });
  // console.log("Mongo Success");
});
