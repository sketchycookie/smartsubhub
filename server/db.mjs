// db.mjs
import mysql from "mysql2"; 

// Replace with your XAMPP root password
const connection = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "newpassword", 
  database: "dbtest",
  port: 3307
});


connection.connect((err) => {
  if (err) {
    console.log("MySQL connection error:", err);
  } else {
    console.log("Connected to MySQL Database");
  }
});

export default connection;