const mongoose = require("mongoose");
// define the schema for our user model
const courseSchema = mongoose.Schema(
  {
    courseName: String,
    courseDuration: String,
    courseFee: Number,
    isActive: Boolean,
  },
  { timestamps: true }
);

// create the model for users and expose it to our app
module.exports = mongoose.model("course", courseSchema);
