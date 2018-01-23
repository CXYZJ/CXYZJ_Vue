let server = require('./config').server
let user = require('./Router/User')
let index = require('./Router/Index')
let article = require('./Router/Article')
let forum = require('./Router/Forum')
let introduce = require('./Router/Introduce')
let education = require('./Router/Education')

user.response()
index.response()
article.response()
forum.response()
introduce.response()
education.response()

server.listen(8080, () => {
  console.log('JSON-SERVER is running on http://localhost:8080')
})


