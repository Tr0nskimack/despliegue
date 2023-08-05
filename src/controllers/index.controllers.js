const { Pool } = require("pg");
const indexCtrl = {};

const pool = new Pool({
  host: "localhost",
  user: "postgres",
  password: "root",
  database: "empleados",
  port: "5432",
});




indexCtrl.getUsers = async (req, res) => {
  try {
    const response = await pool.query("select * from users");
    console.log(response.rows)
    res.status(200).json(response.rows);
    
    
  } catch (error) {
    console.log(error)
  }
}
indexCtrl.createUsers = async (req, res) => {
  const {name, email} = req.body

  try {
    
      const resp = await pool.query(
        "insert into users (name, email) values ($1, $2)",
        [name, email]
      );
    
      console.log(resp).rows
    } catch (error) {
    console.log(error)
  }
  
  res.send("Usuario creado")
  
}

indexCtrl.deleteUsers = async (req, res) => {

  try {
    const id = (req.params.id)
    const resp = await pool.query("delete from users where id = $1", [id])
    
    res.json(`User delete ${id} succefully`)
    
  } catch (error) {
    console.log(error)
  }
  
}

indexCtrl.userById = async (req, res) => {
  const id = (req.params.id)
  try {
    const resp = await pool.query("select * from users where id = $1", [id])
    res.json(resp.rows)
  } catch (error) {
    console.log(error)
    
  }
}

indexCtrl.updateUsers = async (req, res) => {
  const id = req.params.id
  try {
    const {name, email} = req.body
    const resp = await pool.query("update users set name = $1, email = $2 where id = $3", [name, email, id])
    res.json("usuario actualizado satisfactoriamente")
    
  } catch (error) {
    console.log(error)
    
  }
}
  


  module.exports = indexCtrl;