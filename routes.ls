export = [
  * method: \GET
    path: '/{param*}'
    handler:
      directory:
        path: \public
        defaultExtension: \html
]
