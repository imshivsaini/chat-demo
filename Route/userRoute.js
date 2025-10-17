import { Router } from "express";
import userService from "../Service/userService.js";
const route = Router();

route.get("/users", userService.getAllUsers);
route.post("/users", userService.addUser);
route.get("/users/:id", userService.getUserById);

export default route;
