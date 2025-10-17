import { Router } from "express";
import productController from "../Controllers/productController.js";

const route = Router();
route.get("/product", productController.allProducts);
route.post("/product", productController.addProduct);
route.get("/product/:id", productController.getProductByID);

export default route;
