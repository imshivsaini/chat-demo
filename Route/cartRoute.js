import { Router } from "express";
import cartService from "../Service/cartService.js";
const route = Router();

route.get("/cart/:userId", cartService.getCartByID);
route.post("/cart/:userId", cartService.addItemToCart);

export default route;
