// import required modules
import Login from './Pages/Auth/Login';
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var con = require('./connection'); // import database connection module

// set up middleware to parse request body
app.use(bodyParser.json());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));

// serve static files from public folder
app.use(express.static('public'));

// route to render login page
app.get('/loginpg',function(req, res){
    res.sendFile(__dirname+'Login')
});

// route to handle login request
app.post('/loginpg', function(req, res){
    var username = req.body.username;
    var password = req.body.pswrd;

    // query the database to find user with matching credentials
    var sql = "SELECT * FROM login WHERE username = ? AND password = ?";
    var values = [username, password];

    con.query(sql, values, function(error, result) {
      if (error) throw error;
      
      // check if any matching user was found
      if (result.length > 0) {
        res.send('LOGIN SUCCESSFUL'); // send success message
      } else {
        res.send('Invalid username or password'); // send error message
      }
    });
});

// route to render signup page
app.get('/signup',function(req, res){
  res.sendFile(__dirname+'/signup.html')
});


// route to handle signup request
app.post('/signup', function(req, res){
  console.log(req.body);
  var username = req.body.email;
  var password = req.body.password;
  var confirmPassword = req.body.confirm_password;

  // check if passwords match
  if (password !== confirmPassword) {
    res.send("Passwords do not match. Please try again.");
    return;
  }

  // send the data to database using the connection pool
  var sql = "INSERT INTO login (username, password) VALUES ?";
  var values = [
    [username, password]
  ];

  con.query(sql, [values], function(error, result) {
    if (error) throw error;
    res.send('SIGNUP SUCCESSFUL ' + result.insertId);
  });
});

// start the server
app.listen(7000);
