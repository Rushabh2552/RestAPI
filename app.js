require("dotenv").config();
const express = require("express");
const app = express();
const connectDB = require("./db/connect");

const port = process.env.PORT || 5000;

const products_routes = require("./routes/products");

app.get("/", (req, res) => res.send("Hello World!"));

app.use("/api/products", products_routes);

const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URI);
    app.listen(port, () =>
      console.log(`Example app listening on port ${port}!`)
    );
  } catch (error) {
    console.log(error);
  }
};
start();
