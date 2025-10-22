import { Router } from "express";
import productController from "../Controllers/productController.js";

const route = Router();
route.get("/api/products", productController.allProducts);
route.post("/api/products", productController.addProduct);
route.get("/api/products/:id", productController.getProductByID);

export default route;
