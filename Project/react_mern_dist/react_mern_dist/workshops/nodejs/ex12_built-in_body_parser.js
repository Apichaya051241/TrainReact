// https://webapplog.com/intro-to-express-js-parameters-error-handling-and-other-middleware/
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.post('/post', function(req, res){
  const _username = req.body.username;
  const _password = req.body.password;
 
  res.json({result: 'success', username: _username, password: _password});
  
});

 
var server = app.listen(3000, function(){
  var host = server.address().address;
  var port = server.address().port;
  console.log("Listening at http://%s:%s", host, port);
});
