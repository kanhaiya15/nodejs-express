const jwt = require("jsonwebtoken");
module.exports = (req, res, next) => {
  try {
    const bearerToken =
      req.headers["Authorization"] || req.headers["authorization"];
    let token = bearerToken
      ? bearerToken.split(" ").length > 1
        ? bearerToken.split(" ")[1]
        : null
      : null;
    if (token === null) {
      return res
        .status(401)
        .json({ error: "Unauthorized User, Please login again" });
    }
    const decode = jwt.decode(token);
    if (decode === null) {
      return res
        .status(401)
        .json({ error: "Unauthorized User, Please login again" });
    }
    return next();
  } catch (error) {
    return res
      .status(401)
      .json({ error: "Unauthorized User, Please login again" });
  }
};
