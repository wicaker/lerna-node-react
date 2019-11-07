"use strict";

const axios = require("axios");

module.exports = class {
  async find() {
    const products = await axios.get("http://localhost:4000/products");
    return products.data;
  }

  async get(productId) {
    const product = await axios.get(
      `http://localhost:4000/products/${productId}`
    );
    return product.data;
  }

  async persist(productEntity) {
    try {
      const product = await axios.post(
        "http://localhost:4000/products",
        productEntity
      );
      return product.data;
    } catch (error) {
      return error;
    }
  }
};
