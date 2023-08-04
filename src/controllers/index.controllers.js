const { Pool } = require("pg");
const indexCtrl = {};

const pool = new Pool({
  host: "ep-rough-fire-24216729.us-east-2.aws.neon.tech",
  user: "fl0user",
  password: "iYuS9zbtD5em",
  database: "ep-rough-fire-24216729.us-east-2.aws.neon.tech:5432/posts",
  port: "5432",
});




indexCtrl.Users = async (req, res) => {
  const response = await pool.query("select * from users");
  res.status(200).json(response.rows);
  };
  


  module.exports = indexCtrl;