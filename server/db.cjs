const mysql = require("mysql2/promise");
// import { mysql2 } from 'mysql2/promise';
// async function connectToDatabase() {
//   try {
    const pool = mysql.createPool({
      host: "database-2.c366gw6m6xt2.us-east-1.rds.amazonaws.com", // RDS 实例的域名
      user: "admin",
      password: "00000000",
      database: "test_db",
      port: 3306,
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
