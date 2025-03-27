const data = require("../data/products.json");

function getAll() {
  return data;
}

function getById(id) {
  return data.find((product) => product.id === id);
}

function create(product) {
  const newProduct = { id: data.length + 1, ...product };
  data.push(newProduct);
  return newProduct;
}

function update(id, product) {
  const index = data.findIndex((product) => product.id === id);
  if (index === -1) return null;

  const updatedProduct = { ...data[index], ...product };
  data[index] = updatedProduct;
  return updatedProduct;
}

function remove(id) {
  const index = data.findIndex((product) => product.id === id);
  if (index === -1) return null;
  const removedProduct = data.splice(index, 1);
  return removedProduct;
}

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};
