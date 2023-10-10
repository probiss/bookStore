import express from "express";
import {PORT, MONGO_DB_URI} from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/bookModel.js";
import booksRoute from "./routes/booksRoute.js";
import cors from "cors";

const app = express();
app.use(express.json());
//Allow all origins with default of cors.
app.use(cors())
//Allow Custom origins.
//app.use(cors({
//  origin: "http://localhost:5000",
//  methods: ["GET", "POST", "PUT", "DELETE"],
//  allowedHeaders: ["Content-Type"]
//}))

//Main page.
app.get("/", (req, res) => {
  console.log(req);
  return res.status(200).json({ message: "Hello Books Lovers! Welcome to my Books Shelves :)" });
})

app.use("/books", booksRoute)

mongoose
.connect(MONGO_DB_URI)
.then(() => {
  console.log("Connected to database!");
})
.catch((error) => {
  console.log("Connection failed!");
  console.log(error);
})

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});