const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const providerRoute = require("./routes/providers");
const clientRoute = require("./routes/clients");
const productRoute = require("./routes/products");
const purchaseRoute = require("./routes/purchases");
const saleRoute = require("./routes/sales");

// settings
const app = express();
const port = process.env.PORT || 3000;

// middlewares
app.use(express.json());
app.use("/api", providerRoute);
app.use("/api", clientRoute);
app.use("/api", productRoute);
app.use("/api", purchaseRoute);
app.use("/api", saleRoute);

// routes
app.get("/", (req, res) => {
  res.send("Welcome to the POS API");
});

// mongodb connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((error) => console.error(error));

// server listening
app.listen(port, () => console.log("Server listening to", port));