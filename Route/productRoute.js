import { Router } from "express";
import productService from "../Service/productService.js";

const route = Router();
route.get("/product", productService.allProducts);
route.post("/product", productService.addProduct);
route.get("/product/:id", productService.getProductByID);

export default route;
