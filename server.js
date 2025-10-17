import express from "express";
import usersRoute from "./Route/userRoute.js";
import productsRoute from "./Route/productRoute.js";
import cartRoute from "./Route/cartRoute.js";

const app = express();
app.use(express.json());
app.use(cartRoute);
app.use(productsRoute);
app.use(usersRoute);
app.use((_req, res) => {
  res
    .status(404)
    .send("404 Not Found - The requested resource does not exist.");
});

app.listen(3000, (req, res) => {
  console.log("Server is up and running");
});
