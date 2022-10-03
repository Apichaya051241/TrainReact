// https://webapplog.com/intro-to-express-js-parameters-error-handling-and-other-middleware/
var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static(path.join(__dirname,'/public')));


app.get('/login', function(req, res){  
  res.sendFile(path.join(__dirname,'/public/login.html'));  
});

app.post('/authen', function(req, res){
  res.json({username: req.body.username, password: req.body.password});
});

var server = app.listen(3000, function(){
  var host = server.address().address;
  var port = server.address().port;
  console.log("Listening at http://%s:%s", host, port);
});
