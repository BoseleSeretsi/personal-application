const Pool = require('pg').Pool
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "mystore",
  password: "Letsdoit!",
  port: 5433,
})

module.exports = pool