// https://webapplog.com/intro-to-express-js-parameters-error-handling-and-other-middleware/


var express = require('express');
var app = express();

// load session
const session  = require('express-session');
app.use(session({
  secret: 'codemobiles', cookie: { maxAge: 60000000 },
  resave: true, saveUninitialized: false
}));

/*
app.get('/login/username/:username/password/:password', function(req, res){
  res.json({username: req.params.username, password: req.params.password});
});
*/

// Login
app.get('/login', function(req, res){
  const _username = req.query.username;
  const _password = req.query.password;
  
  if (req.session.isLoggedIn != null && req.session.isLoggedIn == true){
    res.json({result: 'already logged-in', username: _username, password: _password});
    return; 
  }
  
  if(_username == "admin" && _password == 'password'){
    req.session.isLoggedIn = true;
    req.session.username = _username;
    res.json({result: 'success', username: _username, password: _password});
  }else{
    req.session.isLoggedIn = false;
    res.json({result: 'failed', username: _username, password: _password});
  }
  
});

// Profile (Required Login first)
app.get('/profile', function(req, res){
  if (req.session.isLoggedIn != null && req.session.isLoggedIn == true){
    res.json({result: 'success', username: req.session.username});
  }else{
    res.json({result: 'failed, please login first'});
  }
});

// Logout
app.get('/logout', function(req, res){
  req.session.destroy();
  res.json({result:'logout successfully'});
});

var server = app.listen(3000, function(){
  var host = server.address().address;
  var port = server.address().port;
  console.log("Listening at http://%s:%s", host, port);
});
