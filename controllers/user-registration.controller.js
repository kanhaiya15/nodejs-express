const UserReg = require("../models/user-registration.model");
const bcrypt = require("bcryptjs");
const appUtility = require("../helpers/app.utility");

//new  user registration
exports.userRegistration = async (req, res) => {
  // Validate request
  if (!req.body.emailId) {
    return res.status(400).send({ message: "Content can not be empty!" });
  }
  // Create a user registraion and save in db
  try {
    const userReg = await new UserReg({
      userName: req.body.userName,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      emailId: req.body.emailId,
      password: req.body.password,
      cpassword: req.body.cpassword,
      role: ["Admin", "Client"],
    }).save();
    res.send(userReg);
  } catch (err) {
    console.log(err);
  }
};

//new  user login
exports.userLogin = async (req, res) => {
  try {
    const user = await UserReg.findOne({ emailId: req.body.emailId });
    const isPassMatch = await bcrypt.compare(req.body.password, user.password);
    if (!user) {
      res.send("Some Error Occurred");
    }
    if (!isPassMatch) {
      res.send("user name or password are not match");
    } else {
      const token = await appUtility.GenerateToken(user._id);
      user.token = token;
      user.save();
      res.send(user);
    }
  } catch (err) {
    console.log(err);
  }
};
