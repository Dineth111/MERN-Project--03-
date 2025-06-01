import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import route from "./route/userroute";




dotenv.config();

const app = express();

app.use(bodyParser.json()); // Fixed middleware usage

const PORT = process.env.PORT || 5000; // Correctly declared and initialized PORT
const MONGO_URL = process.env.MONGO_URL; // Fixed variable name

// Database connection
mongoose.connect(MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log("Database connection is successful");
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`); // Fixed string interpolation
  });
}).catch((error) => {
  console.log("Error connecting to the database:", error.message);
});


app.use ("/api/user",route)