const express = require("express");
// import Express from "express"
const dotenv = require("dotenv");
const cors = require("cors");
const bodyparser = require("body-parser");

const { MongoClient } = require("mongodb");

// Connection URL
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

dotenv.config();

// Database Name
const dbName = "passMag";

// console.log(process.env); // remove this after you've confirmed it is working
const app = express();
const port = 3000;
client.connect();
app.use(bodyparser.json());
app.use(cors());
//! the get password API
app.get("/", async (req, res) => {
  const db = client.db(dbName);
  const collection = db.collection("documents");
  const findResult = await collection.find({}).toArray();
  res.json(findResult);
});

//! save Password API
app.post("/", async (req, res) => {
  const passwords = req.body;
  const db = client.db(dbName);
  const collection = db.collection("documents");
  const findResult = await collection.insertOne(passwords);
  res.send({ succsefull: true, result:findResult });
});

//! Delete Api

app.delete("/", async (req, res) => {
  const passwords = req.body;
  const db = client.db(dbName);
  const collection = db.collection("documents");
  const findResult = await collection.deleteOne(passwords);
  res.send({ succsefull: true, result:findResult });
});
app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
