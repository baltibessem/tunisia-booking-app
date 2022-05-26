// importing dependencies and functions 

const express = require("express");
const app = express();
const connectDB =require("./config/connectDB")
require("dotenv").config();
app.use(express.json());

// 1- Creating the server

const PORT = process.env.PORT || 5000;

app.listen(PORT, (err) => {
  if (err) throw err;
  console.log(`SERVER IS RUNNING ON PORT: ${PORT}`);
});

// 2- Connecting to database
connectDB();

// 3-connecting the routes 

app.use("/api/users", require("./routes/user"));

