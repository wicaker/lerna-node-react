const express = require("express");
const app = express();
const port = 3000;
const routes = require("./routes");
const bodyParser = require('body-parser');

const createServer = async () => {
  // parse application/x-www-form-urlencoded
  app.use(bodyParser.urlencoded({ extended: false }));
  // parse application/json
  app.use(bodyParser.json());


  app.use(express.static("../punk-beer-client/dist"));
  
  // Rest API
  app.use("/api",routes);
  app.listen(port, () => console.log(`Example app listening on port ${port}!`));
};

module.exports = createServer;
