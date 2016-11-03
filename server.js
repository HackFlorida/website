const Hapi  = require('hapi')
const Inert = require('inert')
const routes = require('./routes')

// Throws an error if err is supplied
const toss = (e) => {
  if (e) throw e
}

const init = (config, then_) => {
  const server = new Hapi.Server()
  server.connection(config)
  return server
}

const main = () => {
  const serverConfig = {
    port: process.env.PORT || 3000
  }

  const server = init(serverConfig)
  server.register([Inert], (err) => {
    toss(err)
    server.route(routes)
  })

  server.start((err) => {
    toss(err)
    console.log(`Server running at ${server.info.uri}`)
  })
}

main()
