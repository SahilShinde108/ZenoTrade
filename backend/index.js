require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

const bodyParser = require("body-parser");
const cors = require("cors");

const PORT = process.env.PORT || 3002;
const URL = process.env.MONGO_URL;

const app = express();

const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");

app.use(cors());
app.use(bodyParser.json());

// Holdings
app.get("/allHoldings", async (req, res) => {
  let allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});

// Positions
app.get("/allPositions", async (req, res) => {
  let allPositions = await PositionsModel.find({});
  res.json(allPositions);
});

// Buy and Sell
app.post("/newOrder", async (req, res) => {
  let newOrder = new OrdersModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode
  });

  newOrder.save();

  res.send("Order Saved");
});

// Orders
app.get("/allOrders", async (req, res) => {
  let allOrders = await OrdersModel.find({});
  res.json(allOrders);
});

app.listen(PORT, () => {
  console.log(`Listing at port ${PORT}`);
  mongoose.connect(URL);
  console.log("DB Connected");
});
