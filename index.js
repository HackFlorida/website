global = Object.assign(global, require('ramda'))
require('app-module-path/register')
require('src/server').run()
