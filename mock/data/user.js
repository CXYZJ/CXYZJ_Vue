let faker = require('faker')

function register(data) {
  let user
  let url = faker.internet.url()
  let words = faker.random.words()
  user = {
    status: 0,
    data: {
      access_token: "abc",
      user: {
        user_id: faker.random.uuid(),
        nickname: data.nickname || null,
        head_url: url,
        is_admin: faker.random.boolean(),
        email: data.email || null,
        introduce: words,
        gender: faker.random.boolean(),
        bg_url: url
      }
    }
  }
  return user
}


function login(data) {
  let user
  let url = faker.internet.url()
  let userName = faker.internet.userName()
  let words = faker.random.words()
  user = {
    status: 0,
    data: {
      access_token: "abc",
      user: {
        user_id: faker.random.uuid(),
        nickname: userName,
        head_url: url,
        is_admin: faker.random.boolean(),
        email: data.email,
        introduce: words,
        gender: faker.random.boolean(),
        bg_url: url
      }
    }
  }
  return user
}

exports.login = login
exports.register = register
