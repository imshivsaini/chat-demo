import { Router } from "express";
const route = Router();

route.get("/", (_req, res) => {
  res.send("Welcome to the Student & Course Portal API!");
});

export default route;
