const mysql = require("mysql2");
const dbConfig = require("../config.js");

let connection = mysql.createConnection(dbConfig.db);
connection.connect((err) => {
  if (err) {
    console.log("err", err);
  } else {
    console.log("mysql connected");
  }
});

module.exports = connection.promise();
