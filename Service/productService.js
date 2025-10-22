const products = [
  { id: 1, name: "Deo" },
  { id: 2, name: "Perfume" },
  { id: 3, name: "Griller" },
];
function allProducts() {
  return products;
}

function addProduct(name) {
  const newProduct = {
    id: products.length + 1,
    name: name,
  };
  products.push(newProduct);
  return newProduct;
}
function getProductByID(id) {
  const productId = parseInt(id);
  const product = products.find((u) => {
    return u.id === productId;
  });

  if (!product) return -1;
  return product;
}

export default { allProducts, addProduct, getProductByID };
