const express = require('express');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'books_db'
  },
  console.log(`Connected to the books_db database.`)
);

//prepared statement to select and count the id from fav_books table and show count of id in total_count column
  //while grouping them by the in_stock variable

db.query('SELECT COUNT(id) AS total_count FROM favorite_books GROUP BY in_stock', function (err, results) {
  console.log(results);
});

//prep state to select from fav_books, group by section, and make new columns named by what's placed inside
// via the SUM()method for quantity value in afformentioned table.

db.query('SELECT SUM(quantity) AS total_in_section, MAX(quantity) AS max_quantity, MIN(quantity) AS min_quantity, AVG(quantity) AS avg_quantity FROM favorite_books GROUP BY section', function (err, results) {
  console.log(results);
});

app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
