import mysql from "mysql";

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "toko_tembakau",
});

export default db;
