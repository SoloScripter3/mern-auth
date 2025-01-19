import express from "express";
import * as dotenv from "dotenv";
import connectDB from "./config/db.js";

dotenv.config();
const app = express();

connectDB();

app.get("/", (req, res) => {
  res.send("server is ready!");
});

app.listen(3000, () => console.log(`http://localhost:3000`));
