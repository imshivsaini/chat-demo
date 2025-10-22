import { Router } from "express";
import productController from "../Controllers/productController.js";

const route = Router();
route.get("/products", productController.allProducts);
route.post("/products", productController.addProduct);
route.get("/products/:id", productController.getProductByID);

export default route;
