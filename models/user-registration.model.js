const mongoose = require("mongoose");
const appUtility = require("../helpers/app.utility");
// define the schema for our user registration model
const userRegSchema = mongoose.Schema(
  {
    userName: {
      type: String,
      required: "userName can't be empty",
    },
    firstName: {
      type: String,
      required: "firstName can't be empty",
    },
    lastName: String,
    emailId: {
      type: String,
      required: "Email can't be empty",
      unique: true,
    },
    password: {
      type: String,
      required: "Password can't be empty",
      minlength: [4, "Password must be atleast 4 character long"],
    },
    cpassword: String,
    role: [],
    //token: String
  },
  { timestamps: true }
);
// Encrypt Password before save in db
userRegSchema.pre("save", async function (next) {
  this.password = await appUtility.EncryptPassword(this.password);
  this.cpassword = await appUtility.EncryptPassword(this.cpassword);
  next();
});

// Custom validation for email
userRegSchema.path("emailId").validate((val) => {
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,13}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailRegex.test(val);
}, "Invalid e-mail.");
module.exports = mongoose.model("registration", userRegSchema);
