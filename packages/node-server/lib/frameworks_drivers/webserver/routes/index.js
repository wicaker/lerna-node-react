const express = require('express');

const routes = express.Router();
const product = require('./product');

routes.use('/product', product);

module.exports = routes;
