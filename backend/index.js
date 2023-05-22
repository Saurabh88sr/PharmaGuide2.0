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
app.post("/login", (req, res) => {
  const username= req.body.username; 
  const password = req.body.password;
con.query(
  "SELECT * FROM login WHERE username = ? AND password = ?",
  [username, password],
  (err, result) => {
  if (err) {
    //console.log(err); 
    res.send({ err: err });
  } 
  else{
        if (result.length > 0) 
        {
          res.send(result);
        } 
        else 
        {
          res.send({ message: "Wrong username/password combination!" });
        }
  }
  
  }
  );
  });

// to handle signup request
app.post("/register", (req, res) => {
  const { username, password } = req.body;

  // Check username and password against the database
  con.query(
    "INSERT INTO login (username, password) VALUES (?, ?)",
    [username, password],
    (err, results) => {
      if (err) {
        console.log(err);
        res.send({ success: false });
      } else {
        res.send({ success: true });
      }
    }
  );
});

app.get('/drug', (req, res) => {
  const keyword = req.query.keyword;
  const sql = "SELECT * FROM medicines WHERE Generic LIKE ? OR MedicineName LIKE ? OR Drug LIKE ? OR MedicineUses LIKE ?";
  const values = Array(4).fill(`%${keyword}%`);
  con.query(sql, values, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});


// start the server
app.listen(3000, ()=>{
  console.log("Server listening on port 7000");
});
