'use strict';

const Hapi = require('hapi');
const Inert = require('inert');
const routes = require('./routes');

const server = new Hapi.Server();
const serverConfig = {
  port: process.env.PORT || 3000
};

server.connection(serverConfig);
server.register([Inert], onModulesRegistered);
server.start(onServerStarted);

function onModulesRegistered(err) {
  if (err) throw err;
  server.route(routes);
}

function onServerStarted(err) {
  if (err) throw err;
  console.log(`Server running at ${server.info.uri}`);
}
