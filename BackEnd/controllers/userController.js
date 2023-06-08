const pool=require('../config/dbConfig')

const getUsers = (request, response) => {
    pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }
  
  const getUserById = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('SELECT * FROM users WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }
  
  const createUser = (request, response) => {
    const { firstname, lastname, email, userType, password } = request.body
  
    pool.query('INSERT INTO users (firstname, lastname, email, userType, password) VALUES ($1, $2, $3, $4, $5) RETURNING *', [firstname, lastname, email, userType, password], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send({message:`User added with ID: `})
    })
  }
  
  const updateUser = (request, response) => {
    const id = parseInt(request.params.id)
    const { firstname, lastname, email, userType, password } = request.body
  
    pool.query(
      'UPDATE users SET firstname = $1, lastname = $2, email = $3, usertype = $4, password = $5 WHERE id = $6',
      [firstname, lastname, email, userType, password, id],
      (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).send({message: `User modified with ID: ${id}`})
      }
    )
  }
  
  const deleteUser = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('DELETE FROM users WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`User deleted with ID: ${id}`)
    })
  }
  
  module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
  }