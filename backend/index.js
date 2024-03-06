var express = require("express");
var app = express();
require("dotenv").config();
var mongoose = require("mongoose");
var ccavReqHandler = require("./payment/ccavRequestHandler.js");
var ccavResHandler = require("./payment/ccavResponseHandler.js");
var User = require("./models/user_model.js");

mongoose.connect(process.env.MONGO_URI, {
  serverSelectionTimeoutMS: 5000,
});

mongoose.connection.on("error", (err) => {
  console.error("MongoDB connection error:", err);
});

// new User({
//   username: "admin",
//   address: "kudhfb",
//   amount: 43,
//   city: "djbv",
//   college: "dlvjn",
//   customerId: "ldivhn",
//   department: "INT",
//   email: "skufvb",
//   eventDetails: "kubdv",
//   ordId: "ldvuhb",
//   paid: false,
//   phoneNo: "9876532432",
//   regNo: "ksudgvskjfvb",
//   year: 3,
// }).save();

app.use(express.static("public"));
app.set("views", __dirname + "./payment/public");
app.engine("html", require("ejs").renderFile);

app.get("/about", function (req, res) {
  res.render("dataFrom.html");
});

app.post("/ccavRequestHandler", (req, res) => {
  ccavReqHandler.postReq(req, res);
});

app.post("/checkout", (req, res) => {
  // Handle checkout logic
});

app.post("/ccavResponseHandler", (req, res) => {
  ccavResHandler.postRes(req, res);
});

mongoose.connection.once("open", () => {
  app.listen(3001, () => {
    console.log("Server started at: http://localhost:3001");
  });
  console.log("Mongo Success");
});
