const jsonServer = require('json-server')

const server = jsonServer.create()
const middleware = jsonServer.defaults()
server.use(middleware)
server.use(jsonServer.bodyParser)
exports.server = server
