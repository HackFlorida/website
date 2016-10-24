require! {
  hapi: Hapi
  inert: Inert
  './routes'
}

const server = new Hapi.Server!
const server-config =
  port: process.env.PORT or 3000

server.connection server-config
server.register [Inert], on-modules-registered
server.start on-server-started

!function on-modules-registered err
  if err then throw err
  server.route routes

!function on-server-started err
  if err then throw err
  console.log "Server running at #{server.info.uri}"
