import productService from "../Service/productService.js";
function allProducts(_req, res) {
  let products = productService.allProducts();
  res.json({
    message: "Getting All products",
    data: products.map((p) => p.name),
  });
}
function addProduct(req, res) {
  let newProduct = productService.addProduct(req.body.name);
  res.json({
    message: "Adding a product",
    data: newProduct.name,
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
