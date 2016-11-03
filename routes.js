const routes = [
  {
    method: 'GET',
    path: '/{param*}',
    handler: {
      directory: {
        path: 'public',
        defaultExtension: 'html'
      }
    }
  }
]

module.exports = routes
