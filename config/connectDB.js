const mongoose = require("mongoose");
require("dotenv").config();
const DataBaseURL = process.env.DATABASE_URL;


const connectDB = () => {
  mongoose
    .connect(DataBaseURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(console.log("DB CONNECTED"))
    .catch((err) => console.log(err));
};

module.exports = connectDB;
