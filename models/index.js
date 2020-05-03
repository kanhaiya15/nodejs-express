const dbConfig = require("../config/db.config.js").dbConnection;
const portConf = require("../config/db.config.js").express;

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
module.exports = {
  mongoose: mongoose,
  url: dbConfig.mongoURI,
  port: portConf.port,
  courses: require("./course.model"),
};
