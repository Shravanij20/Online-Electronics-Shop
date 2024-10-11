


import express from 'express';
import mysql from 'mysql';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();

const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'Chetan@14',
  database: 'react',
  insecureAuth: true,
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/api/get', (req, res) => {
  const sqlSelect = "select * from Product";
  db.query(sqlSelect, (err, result) => {
    if (err) {
      return res.status(500).send(err.message);
    }
    console.log(result);
    res.status(200).send(result); // Send only the result array
  });
});


app.listen(3001, () => {
  console.log("Running on port 3001");
});

