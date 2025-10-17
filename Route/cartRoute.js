import { Router } from "express";
import cartController from "../Controllers/cartController.js";
const route = Router();

route.get("/cart/:userId", cartController.getCartByID);
route.post("/cart/:userId", cartController.addItemToCart);

export default route;
