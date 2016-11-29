const Hapi  = require('hapi')
const Inert = require('inert')
const routes = require('src/routes')

// Throws an error if err is supplied
const toss = (e) => {
  if (e) throw e
}

const func = () => new Promise((resolve, reject) => {
  reject('Fuck')
})

const init = (config, then_) => {
  const server = new Hapi.Server()
  server.connection(config)
  return server
}

const run = () => {
  const serverConfig = {
    port: process.env.PORT || 3000
  }

  func()

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

process.on('unhandledRejection', (err) => {
  console.log(err)
})

module.exports = { run }
