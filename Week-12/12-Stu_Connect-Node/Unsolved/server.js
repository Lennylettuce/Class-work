const express = require('express');
const mysql = require('mysql2');
//add mysql node library to your code, and express node package
const PORT = process.env.PORT || 3001;
const app = express();
//const for express to use instance below, json the data, urlencoded parses requests with url payloads
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// create connection to local host via method/middleware 
const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'classlist_db'
  },
  console.log(`Connected to the classlist_db database.`)
);
//this method runs sql files code in query is what'll console.log
db.query('SELECT * FROM students', function (err, results) {
  console.log(results);
});

app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
