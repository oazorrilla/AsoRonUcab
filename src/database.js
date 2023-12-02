const pg = require('pg');
const client = new pg.Client({
  host: "localhost",
  port: 5432,
  database: "AsoRonUcabBD",
  user: "postgres",
  password: "0000",
});

module.exports = client;