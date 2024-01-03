const mysql = require("mysql2/promise");
require("dotenv").config();
// import { mysql2 } from 'mysql2/promise';
// async function connectToDatabase() {
//   try {
  // console.log(process.env.DB_HOST, "DB DATAAAAAAAAAAAAAA");
    const pool = mysql.createPool({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      port: process.env.DB_PORT,
    });
    // return pool;
    // await pool.connect();
    // const [rows, fields] = await pool.query("SELECT * FROM user");
    // const [rows, fields] = await pool.execute("SELECT * FROM user");
    // console.log(rows);
    // await pool.end();
  // } catch (error) {
  //   console.error("Failed to connect to the RDS MySQL database:", error);
  // }
// }

// connectToDatabase();
module.exports = pool;
