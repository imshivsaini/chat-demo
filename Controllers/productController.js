import productService from "../Service/productService.js";
import path from "path";
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
  console.log("Product received from client:", productName);
  let newProduct = productService.addProduct(productName);
  res.json({
    message: "Adding a product",
    data: newProduct,
  });
}
function getProductByID(req, res) {
  let product = productService.getProductByID(req.params.id);
  if (product === -1) res.send(`No product Available with id ${req.params.id}`);
  res.send(
    `Fetching product with ID: ${product.id} \n here is the details ${product.name}`
  );
}
export default { allProducts, addProduct, getProductByID };
