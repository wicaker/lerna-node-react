'use strict';

module.exports = (productId, { productRepository }) => {
  return productRepository.remove(productId);
};
