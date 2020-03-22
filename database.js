const mongoose = require("mongoose");

const mdbUrl = "mongodb://localhost:27017/comment";

const initDB = () => {
  mongoose.connect(mdbUrl);

  mongoose.connection.once("open", () => {
    console.log("connected to comment database");
  });
};

module.exports = initDB;