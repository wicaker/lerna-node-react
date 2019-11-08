
const Product = require('../../enterprise_business_rules/entities/Product');

module.exports = (name, imageUrlurl, description, { productRepository }) => {
  const product = new Product(null, name, imageUrlurl, description);
  return productRepository.persist(product);
};
