let faker = require('faker')

function slideshows() {
  let data = []
  for (let i = 1; i < 5; i++) {
    data.push({
      slideshow_id: faker.random.uuid(),
      img_title: faker.name.title(),
      img_url: faker.internet.url(),
      target_url: faker.internet.url(),
      seq: i
    })
  }

  return ({
    status: 0,
    data: data
  })
}

exports.slideshows = slideshows
