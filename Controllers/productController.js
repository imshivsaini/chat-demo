const products = [
  { id: 1, name: "Deo" },
  { id: 2, name: "Perfume" },
  { id: 3, name: "Griller" },
];
function allProducts(req, res) {
  res.json({
    message: "Fetching all products",
    data: products,
  });
}
function addProduct(req, res) {
  const newProduct = {
    id: products.length + 1,
    name: req.body.name,
  };
  products.push(newProduct);
  res.json({
    message: "Adding a new product",
    data: newProduct.name,
  });
}
function getProductByID(req, res) {
  const productId = parseInt(req.params.id);
  const product = products.find((u) => {
    return u.id === productId;
  });

  if (!product) return res.status(404).send("user not found");
  res.send(
    `Fetching product with ID: ${productId} \n here is the details ${product.name}`
  );
}
export default { allProducts, addProduct, getProductByID };
