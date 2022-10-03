var express = require('express');
var path = require('path');
var app = express();

app.get('/', function(req, res){
  res.end('Welcome to NodeJS');
});

app.get('/profile', function(req, res){
  res.end('Profile');
});

app.get('/show', function(req, res){
  res.json({res: 'show show'});
});

app.get('/authen', function(req, res){
  res.sendFile(path.join(__dirname, '/public/login.html'));
});

var server = app.listen(3000, function(){
  var host = server.address().address;
  var port = server.address().port;
  console.log("Listening at http://%s:%s", host, port);
});

