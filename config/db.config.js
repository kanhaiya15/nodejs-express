module.exports = {
  dbConnection: {
    mongoURI: process.env.DB_PR || "mongodb://localhost:27017/school",
  },
  express: {
    port: process.env.EXPRESS_PORT || 3003,
    staticFilesPath: "./client/public",
  },
};
