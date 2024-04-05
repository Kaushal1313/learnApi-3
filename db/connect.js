const mongoose = require("mongoose");

const username = "kausahl1313";
const password = "kaushal@1313"; // Replace with your actual password

// Encode the password
const encodedPassword = encodeURIComponent(password);

const dbName = "kaushalApi"; // Replace with your actual database name

const uri = `mongodb+srv://${username}:${encodedPassword}@kaushalapi.av34y2a.mongodb.net/${dbName}?retryWrites=true&w=majority&appName=kaushalApi`;

const connectDB = () => {
  console.log("Yes its connected to the database");
  return mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

module.exports = connectDB;
