const mysql = require("mysql");

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "mis_db"
});

db.connect(function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log("connected to database test");
    }
});

module.exports = db;

