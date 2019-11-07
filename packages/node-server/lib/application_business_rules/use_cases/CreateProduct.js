'use strict';

const Product = require('../../enterprise_business_rules/entities/Product');

module.exports = (name, image_url, description, { productRepository }) => {
  const product = new Product(null, name, image_url, description);
  return productRepository.persist(product);
};
