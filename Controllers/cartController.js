function getCartByID(req, res) {
  const { userId } = req.params;
  res.send(`Fetching cart for user with ID: ${userId}`);
}
function addItemToCart(req, res) {
  const { userId } = req.params;
  res.send(`Adding product to cart for user with ID: ${userId}`);
}

export default {
  getCartByID,
  addItemToCart,
};
