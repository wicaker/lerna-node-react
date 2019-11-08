
module.exports = class {
  constructor(repository) {
    this.repository = repository;
  }

  persist(productEntity) {
    return this.repository.persist(productEntity);
  }

  merge(productEntity) {
    return this.repository.merge(productEntity);
  }

  remove(productId) {
    return this.repository.remove(productId);
  }

  get(productId) {
    return this.repository.get(productId);
  }

  // getBySku(sku) {
  //   return this.repository.getBySku(sku);
  // }

  find() {
    return this.repository.find();
  }
};
