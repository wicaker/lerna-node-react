'use strict';
const createServer = require('./lib/frameworks_drivers/webserver/server');

// Start the server
const start = async () => {
  /**
   * node (express) server
   */
  try {
    await createServer();
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

start();