import { Router } from "express";
import userController from "../Controllers/userController.js";
const route = Router();

route.get("/users",userController.getUsers);
route.post("/users",userController.addUser);
route.get("/users/:id",userController.getUserById);

export default route;
