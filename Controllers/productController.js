import productService from "../Service/productService.js";
import path from "path";
import response from "../utils/response.js";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function allProducts(_req, res) {
  let products = productService.allProducts();
  console.log(products);
  res.sendFile(path.join(__dirname, "..", "view", "product.html"));
}

function addProduct(req, res) {
  const { productName } = req.body;
  console.log(productName);
  if (!productName) {
    return response.sendErrorResponse(res, {
      message: "Name is requried",
      statusCode: 404,
    });
  }
  let newProduct = productService.addProduct(productName);
  return response.sendResponse(res, newProduct, 201);
}

function getProductByID(req, res) {
  let product = productService.getProductByID(req.params.id);
  if (product === -1) {
    return response.sendErrorResponse(res, {
      message: "No product found",
      statusCode: 404,
    });
  }

  return response.sendResponse(res, product, 200);
}
export default { allProducts, addProduct, getProductByID };
