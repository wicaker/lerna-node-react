import App from '@lerna-node-react/product/dist/App';
import { renderToString } from 'react-dom/server';
import hbs from 'handlebars';

const express = require('express');

const route = express.Router();
const ProductController = require('../../../interface_adapters/controllers/ProductController');

route.get('/', async (req, res) => {
  const products = await ProductController.findProducts();
  const theHtml = `
  <html>
  <head><script>window.__INITIAL__DATA__ = ${JSON.stringify({ products })}</script><title>My First SSR</title></head>
  <body>
  <h1>Catch Beer</h1>
  <div id="reactele">{{{reactele}}}</div>
  <script src="/index_bundle.js" charset="utf-8"></script>
  </body>
  </html>
  `;

  const hbsTemplate = hbs.compile(theHtml);
  const reactComp = renderToString(`<${App} ${products} = ${products} />`);
  const htmlToSend = hbsTemplate({ reactele: reactComp });
  return res.send(htmlToSend);
});

route.get('/:id', async (req, res) => {
  const product = await ProductController.getProduct(req);
  return res.json(product);
});

route.post('/', async (req, res) => {
  req.payload = {
    name: req.body.name,
    imageUrlurl: req.body.imageUrlurl,
    description: req.body.description,
  };
  const product = await ProductController.createProduct(req);
  return res.json(product);
});

module.exports = route;
