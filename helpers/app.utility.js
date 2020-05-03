const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
// encrypt password and cpassword
exports.EncryptPassword = async (password) => {
  const EncryptedPassword = bcrypt.hash(password, 8);
  return EncryptedPassword;
};

// genrate api token
exports.GenerateToken = async (id) => {
  const token = jwt.sign({ _id: id }, "school");
  return token;
};
