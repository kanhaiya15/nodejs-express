const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const chalk = require("chalk");
const routes = require("./routes");
// for consol info for worning Erroe ans success
const error = chalk.bold.red;
const warning = chalk.keyword("orange");
const success = chalk.keyword("green");

const app = express();
const path = require("path");
var corsOptions = {
  origin: "http://localhost:4200",
};

app.use(cors(corsOptions));

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse requests of content-type - application/json
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));
//...fire the models
const db = require("./models/index");
//---fire routes
app.use("/", routes);
db.mongoose
  .connect(db.url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((data) => {
    console.log(success("DB connection successfully!"));
  })
  .catch((err) => {
    console.log(error("DB connection Error occur!"));
    process.exit();
  });

// simple route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
  //res.json({ message: "Welcome to school manegment system  application." });
});

//...fire the routes
//require('./routes')(app);
// set port, listen for requests
app.listen(db.port, () => {
  console.log(success("Server is running on port", db.port));
});
