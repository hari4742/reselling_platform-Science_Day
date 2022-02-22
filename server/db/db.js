const { Pool } = require("pg");
const credentials = {
  user: "postgres",
  host: "localhost",
  database: "reselling_platform",
  password: "mydb4742",
  port: 5432,
};
const pool = new Pool(credentials);

module.exports = {
  query: (text, params) => {
    return pool.query(text, params);
  },
};
