const express = require('express');

const app = express();
const port = 3001;
const bodyParser = require('body-parser');
const routes = require('./routes');

const createServer = async () => {
  // parse application/x-www-form-urlencoded
  app.use(bodyParser.urlencoded({ extended: false }));
  // parse application/json
  app.use(bodyParser.json());

  app.use(express.static('node_modules/@lerna-node-react/product/dist'));

  // Rest API
  app.use('/api', routes);
  app.listen(port, () => console.log(`Example app listening on port ${port}!`));
};

module.exports = createServer;
