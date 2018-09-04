const faker = require('faker')
const fs = require('fs')

const path = 'db.json'

const generateDatabase = () => {
  const db = {
    users: [],
    comments: []
  }

  for (let i = 0; i <= 5; i++) {
    const user = {}

    user.id = i
    user.name = faker.name.findName()
    user.city = faker.address.city()
    user.state = faker.address.state()
    user.likes = faker.random.number(300)
    user.like = faker.random.boolean()
    user.followers = faker.random.number(4000)
    user.following = faker.random.number(5000)
    user.follow = faker.random.boolean()

    db.users.push(user)
  }

  for (let i = 0; i <= 50; i++) {
    const comment = {}

    comment.id = i
    comment.author = faker.name.findName()
    comment.message = faker.lorem.sentence(10)
    comment.date = faker.date.between('2018-06-02', '2018-09-03')

    comment.userid = faker.random.number(5)

    db.comments.push(comment)
  }

  fs.writeFile('db.json', JSON.stringify(db), err => {
    if (err) throw err
    console.log(`\n\nCustom database has been created!`)
    console.log(`Database file name: db.json!`)
  })
}

if (fs.existsSync(path)) {
  console.log(`\nDatabase file already exists!\n`)
} else {
  generateDatabase()
}
