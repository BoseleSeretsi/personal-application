const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const database = require('./config/dbConfig')
const db = require('./controllers/userController')
const port = 4000
const cors =require("cors")

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.use(cors({
  origin:'http://localhost:4200'
}))


app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' })
})

//crud for users(get post del and update)
app.get('/users', db.getUsers)
app.get('/users/:id', db.getUserById)
app.post('/users', db.createUser)
app.put('/users/:id', db.updateUser)
app.delete('/users/:id', db.deleteUser)


//authentication
app.post('/users/register', db.createUser)

app.listen(port, () => {
  
  console.log(`App running on port ${port}.`)
  database.connect();
  
})