let server = require('./config').server
let user = require('./data/user')

exports.response =
  () => {
    server.post("/v1.0/front/users/login", (req, res) => {
      res.jsonp(user.login(req.body))
    })
    server.post("/v1.0/front/users/register", (req, res) => {
      res.jsonp(user.register(req.body))
    })
   
  }
