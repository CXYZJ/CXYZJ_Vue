let server = require('./config').server
let index = require('./data/index')

exports.response =
  () => {
    server.get("/v1.0/back/index/slideshows", (req, res) => {
      res.jsonp(index.slideshows())
    })
  }
