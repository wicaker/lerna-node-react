'use strict';

// const SayHello = require('../../application_business_rules/use_cases/SayHello');
const ListProducts = require('../../application_business_rules/use_cases/ListProducts');
const GetProduct = require('../../application_business_rules/use_cases/GetProduct');
const CreateProduct = require('../../application_business_rules/use_cases/CreateProduct');



const ProductRepository = require('../../application_business_rules/repositories/ProductRepository');
const ProductRepositoryInService = require('../storage/ProductRepositoryInService');
const productRepository = new ProductRepository(new ProductRepositoryInService());

module.exports = {

  async createProduct(request) {
    const { name, image_url, description } = request.payload;
    const product = await CreateProduct( name, image_url, description, { productRepository });
   
    // Output
    return product;
  },

  async findProducts() {
    // Treatment
    const products = await ListProducts({ productRepository });

    // Output
    // const userSerializer = new UserSerializer();
    return products;
  },

  async getProduct(request) {

    // Input
    const productId = request.params.id;

    // Treatment
    const product = await GetProduct(productId, { productRepository });

    // Output
    if (!product) {
      return ({message:"product not found"});
    }
    // const userSerializer = new UserSerializer();
    // return userSerializer.serialize(user);
    return product;
  },

};