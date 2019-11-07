'use strict';

module.exports = (productId, { productRepository }) => {
  return productRepository.get(productId);
};
