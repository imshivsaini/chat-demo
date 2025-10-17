import express from "express";
import studentRoute from "./Route/studentRoute.js";
import courseRoute from "./Route/courseRoute.js";
import welcomeroute from "./Route/route.js";
const app = express();
app.use(express.json());
app.use(welcomeroute);
app.use("/students", studentRoute);
app.use("/courses", courseRoute);
app.use((_req, res) => {
  res
    .status(404)
    .send("404 Not Found - The requested resource does not exist.");
});

app.listen(3000, (req, res) => {
  console.log("Server is up and running");
});
