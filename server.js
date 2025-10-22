import express from "express";
import productsRoute from "./Route/productRoute.js";

const app = express();
app.use(express.json());
app.use(productsRoute);

app.use((_req, res) => {
  res
    .status(404)
    .send("404 Not Found - The requested resource does not exist.");
});

app.listen(3000, (req, res) => {
  console.log("Server is up and running");
});
