global <<< require 'prelude-ls'

require! {
  hapi: Hapi
  inert: Inert
  './routes'
}

# Throws an error if err is supplied
toss = (e) ->
  if e then throw e

init = (config, then_) ->
  const server = new Hapi.Server!
  server.connection config
  then_ server

main = (routes) ->
  server-config = port: process.env.PORT or 3000
  do
    server <- init server-config
    e <- server.register [Inert]
    toss e
    server.route routes
    e <- server.start
    toss e
    console.log "Server running at #{server.info.uri}"

main routes.routes
