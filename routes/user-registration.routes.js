module.exports = (app) => {
  const userReg = require("../controllers/user-registration.controller");
  const router = require("express").Router();
  // user a new registration
  router.post("/registration", userReg.userRegistration);
  // user a new login
  router.post("/login", userReg.userLogin);
  app.use("/api/user", router);
};
