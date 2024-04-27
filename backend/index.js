var express = require("express");
var app = express();
require("dotenv").config();
var mongoose = require("mongoose");
var ccavReqHandler = require("./payment/ccavRequestHandler.js");
var ccavResHandler = require("./payment/ccavResponseHandler.js");
var User = require("./models/user_model.js");
var cors = require("cors");
const QRCode = require("qrcode");
const nodemailer = require("nodemailer");
var uuidv4 = require("uuid").v4;
const json2csv = require("json2csv").Parser;
process.env.TZ = "Asia/Kolkata";


mongoose.connect(process.env.MONGO_URI, {
  serverSelectionTimeoutMS: 30000,
});

// mongoose.connection.on("error", (err) => {
//   console.error("MongoDB connection error:", err);
// });

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

app.use(cors());

app.use(express.static("public"));
app.set("views", __dirname + "./payment/public");
app.engine("html", require("ejs").renderFile);

app.get("/about", function (req, res) {
  res.render("dataFrom.html");
});

app.get("/getTime", (req, res) => {
  res.json({
    dateNow: Date.now(),
    day: new Date(Date.now()).getDay(),
    date: new Date(Date.now()).getDate(),
    month: new Date(Date.now()).getMonth(),
    hour: new Date(Date.now()).getHours(),
    minute: new Date(Date.now()).getMinutes(),
    seconds: new Date(Date.now()).getSeconds(),
    UTCdate: new Date(Date.now()).getUTCDate(),
    UTCmonth: new Date(Date.now()).getUTCMonth(),
    UTChour: new Date(Date.now()).getUTCHours(),
    UTCminute: new Date(Date.now()).getUTCMinutes(),
    UTCseconds: new Date(Date.now()).getUTCSeconds(),
  });
});

app.get("/getExcel/:pass", async (req, res) => {
  const pass = req.params.pass.toLowerCase();
  if (pass !== "mcwhale@2002") {
    res.send("Not authenticated");
    return;
  }
  try {
    const documents = await User.find({ paid: true });

    if (documents.length > 0) {
      const fieldMapping = {
        username: "Username",
        email: "Email",
        phoneNo: "Phone Number",
        department: "Department",
        college: "College",
        year: "Year",
        amount: "Amount",
        pass: "Pass",
      };

      const transformedData = documents.map((document) => {
        const transformedDocument = {};
        for (const key in document._doc) {
          if (fieldMapping[key]) {
            transformedDocument[fieldMapping[key]] = document._doc[key];
          }
        }
        return transformedDocument;
      });

      const fields = Object.values(fieldMapping);

      const json2csvParser = new json2csv({ fields });
      const csv = json2csvParser.parse(transformedData);
      const now = new Date(Date.now());
      const fileName = `${now.getDate()}-${now.getMonth()}___${now.getHours()}-${now.getMinutes()}-${now.getSeconds()}_soldout.csv`;

      res.setHeader(
        "Content-Disposition",
        `attachment; filename=${fileName}`
      );
      res.setHeader("Content-Type", "text/csv");
      res.locals.fileName = fileName;
      res.status(200).send(csv);
    }
  } catch (error) {
    console.log(error);
    res.status(401).send("Internal server error");
  }
});

app.get("/addUser", async (req, res, next) => {
  let cusId = Date.now() + "_" + "2127200801047";
  let ordId = "ORD_" + uuidv4();
  await new User({
    username: "Krithik",
    customerId: cusId,
    regNo: "2127200801047",
    address: "7/11, nsk road, ullagaram",
    phoneNo: "7806903916",
    city: "Chennai",
    college: "SVCE",
    department: "IT",
    email: "2020it0644@svce.ac.in",
    pass: "earlyBird",
    ordId: ordId,
    amount: "599",
    year: "4",
    paid: true,
  }).save();

  const qrCodeBuffer = await QRCode.toBuffer(ordId);
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWD,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL,
    to: "2020it0644@svce.ac.in",
    subject: "Highways Ticket",
    html: `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Highways E-Ticket</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                background-color: #f4f4f4;
                margin: 0;
                padding: 0;
                text-align: center;
            }
    
            .ticket-container {
                max-width: 600px;
                margin: 50px auto;
                background-color: #fff;
                padding: 20px;
                border-radius: 8px;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            }
    
            .ticket-header {
                padding: 10px;
                border-radius: 8px 8px 0 0;
            }
    
            .ticket-content {
                padding: 20px;
            }
    
            .qr-code {
                margin-top: 20px;
            }
    
            .footer-text {
                margin-top: 20px;
                color: #888;
            }
    
            /* Different colors for ticket types */
            .ticket-header.day1 {
                background-color: #3498db;
                color: #fff;
            }
    
            .ticket-header.day2 {
                background-color: #27ae60;
                color: #fff;
            }
    
            .ticket-header.earlyBird {
                background-color: #ffd700;
                color: black;
            }
        </style>
    </head>
    
    <body>
        <div class="ticket-container">
            <div class="ticket-header earlyBird">
                <center>
                    <h2>Highways E-Ticket</h2>
                </center>
                <center>
                    <h1>Early Bird Ticket</h1>
                </center>
            </div>
            <div class="ticket-content">
                <p>Hi Krithik</p>
                <p>We are delighted to have you registered for Highways! Here are your e-ticket details for the exciting event taking place on the 7th and 8th May. We look forward to welcoming you!</p>
                <p>For more updates follow <a href="https://www.instagram.com/svce_highways?igsh=d3djZHRrZG00cm5r">Highways Page</a></p>
                <div class="qr-code">
                    <p>Hello valued participant,</p>
                    <p>Your personalized QR code awaits you below:</p>
                    <!-- Add QR Code here using the provided code snippet -->
                    <img src="cid:qrcode@unique" width=100% alt="QR Code" />
                </div>
                <p class="footer-text">Kindly allow a moment for the QR code to be generated. Thank you for your patience.</p>
                <p class="footer-text">Please present this QR code at the entrance during the event.</p>
            </div>
        </div>
    </body>
    
    </html>
    
  `,
    attachments: [
      {
        filename: "qrcode.png",
        content: qrCodeBuffer,
        encoding: "base64",
        cid: "qrcode@unique", // Content-ID for referencing the image in the HTML
      },
    ],
  };

  const info = await transporter.sendMail(mailOptions);
  console.log(info);
  res.send();
});

app.post("/ccavRequestHandler", async (req, res) => {
  // const qrCodeBuffer = await QRCode.toBuffer(
  //   "Hellooouhbiu"
  // );
  // const transporter = nodemailer.createTransport({
  //   service: "gmail",
  //   auth: {
  //     user: process.env.EMAIL, // Your Gmail email address
  //     pass: process.env.PASSWD, // Your Gmail password or an app-specific password
  //     // user: "2021it0668@svce.ac.in", // Your Gmail email address
  //     // pass: "09naveen", // Your Gmail password or an app-specific password
  //   },
  // });

  // const mailOptions = {
  //   from: process.env.EMAIL,
  //   // to: parsedData.billing_email.trim(),
  //   to: "naveen.akash0904@gmail.com",
  //   subject: "QR Code Email",
  //   html: `
  //   <!DOCTYPE html>
  //   <html lang="en">

  //   <head>
  //       <meta charset="UTF-8">
  //       <meta name="viewport" content="width=device-width, initial-scale=1.0">
  //       <title>Highways E-Ticket</title>
  //       <style>
  //           body {
  //               font-family: Arial, sans-serif;
  //               background-color: #f4f4f4;
  //               margin: 0;
  //               padding: 0;
  //               text-align: center;
  //           }

  //           .ticket-container {
  //               max-width: 600px;
  //               margin: 50px auto;
  //               background-color: #fff;
  //               padding: 20px;
  //               border-radius: 8px;
  //               box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  //           }

  //           .ticket-header {
  //               padding: 10px;
  //               border-radius: 8px 8px 0 0;
  //           }

  //           .ticket-content {
  //               padding: 20px;
  //           }

  //           .qr-code {
  //               margin-top: 20px;
  //           }

  //           .footer-text {
  //               margin-top: 20px;
  //               color: #888;
  //           }

  //           /* Different colors for ticket types */
  //           .ticket-header.Day1 {
  //               background-color: #3498db;
  //               color: #fff;
  //           }

  //           .ticket-header.Day2 {
  //               background-color: #27ae60;
  //               color: #fff;
  //           }

  //           .ticket-header.Combo {
  //               background-color: #ffd700;
  //               color: #black;
  //           }
  //       </style>
  //   </head>

  //   <body>
  //       <div class="ticket-container">
  //           <div class="ticket-header Day1">
  //               <center>
  //                   <h2>Highways E-Ticket</h2>
  //               </center>
  //               <center>
  //                   <h1>Day1 Ticket</h1>
  //               </center>
  //           </div>
  //           <div class="ticket-content">
  //               <p>Hi [user.username]</p>
  //               <p>We are delighted to have you registered for Highways! Here are your e-ticket details for the exciting event taking place on the __ and __ dates. We look forward to welcoming you!</p>
  //               <div class="qr-code">
  //                   <p>Hello valued participant,</p>
  //                   <p>Your personalized QR code awaits you below:</p>
  //                   <!-- Add QR Code here using the provided code snippet -->
  //                   <img src="cid:qrcode@unique" width=100% alt="QR Code" />
  //               </div>
  //               <p class="footer-text">Kindly allow a moment for the QR code to be generated. Thank you for your patience.</p>
  //               <p class="footer-text">Please present this QR code at the entrance during the event.</p>
  //           </div>
  //       </div>
  //   </body>

  //   </html>

  // `,
  // attachments: [
  //   {
  //     filename: "qrcode.png",
  //     content: qrCodeBuffer,
  //     encoding: "base64",
  //     cid: "qrcode@unique", // Content-ID for referencing the image in the HTML
  //   },
  // ],
  // };

  // const info = await transporter.sendMail(mailOptions);
  // console.log("Email sent:", info);

  ccavReqHandler.postReq(req, res);
});

app.get("/qrData/:ordId", async (req, res) => {
  const user = await User.findOne({ ordId: req.params.ordId });
  console.log(user);
  res.json(user);
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
