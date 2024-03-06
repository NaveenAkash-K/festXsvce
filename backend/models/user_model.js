const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  customerId:{
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phoneNo: {
    type: mongoose.Schema.Types.Number,
    required: true,
  },
  regNo: {
    type: String,
    required: true,
  },
  college: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  otpSecret: {
    type: String,
    required: false,
  },
  isTechPass: {
    type: String,
    required: false,
  },
  isProshows: {
    type: String,
    required: false,
  },
  isElite: {
    type: String,
    required: false,
  },
  eventDetails: {
    type: String,
    required: true,
  },
  ordId: {
    type: String,
    required: true,
  },
  paid: {
    type: Boolean,
    required: true,
  },
});

const User = mongoose.model("User", schema);

module.exports = User;
