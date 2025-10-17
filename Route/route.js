import { Router } from "express";
const route = Router();

route.get("/", (_req, res) => {
  res.send("Welcome to CRUD basics");
});

export default route;
