// import required modules
const express = require('express');
const app = express(); 
const cors = require('cors');  
const bodyParser = require('body-parser');
const con = require('./connection'); // import database connection module

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res)=>{
  return res.json("From 2 Backend Side")
})

// Handle login POST request
app.post('/signup', (req, res) => {
  console.log("sucesssully login....");
  const username = req.body.username;
  const password = req.body.password;

  // Check if user exists in database
  const sql = 'SELECT * FROM login WHERE username = ? AND password = ?';
  con.query(sql, [username, password], (err, result) => {
    if (err) throw err;
    if (result.length === 0) {
      // User not found in database
      res.status(401).json({ message: 'Invalid email or password' });
    } else {
      // User found in database
      res.status(200).json({ message: 'Login successful' });
    }
  });
});

app.get('/drug', (req, res)=>{
  const keyword = req.query.keyword;
  const sql = "SELECT * FROM medicine WHERE Id LIKE ? OR Medicine LIKE ? OR Generic LIKE ? OR Brand LIKE ? OR Manufacturer LIKE ? OR Diagnosis LIKE ?";
  const values = Array(6).fill(`%${keyword}%`);
  con.query(sql, values, (err, data)=>{
    if(err) return res.json(err);
    return res.json(data);
  })
})

// start the server
app.listen(7000, ()=>{
  console.log("Server listening on port 7000");
});
