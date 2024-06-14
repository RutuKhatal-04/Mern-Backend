const mongoose = require("mongoose");
const StudentSch = new mongoose.Schema({
  name: String,
  email: String,
  phn: Number,
});

module.exports = mongoose.model("students", StudentSch);
