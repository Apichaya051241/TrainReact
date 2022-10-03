var express = require('express');
var app = express();

app.get('/profile', function(req, res){
  res.end('/profile');
});

// any unroutes will be replied with this handler
app.use(function(req, res, error){
  res.end('Page not found');
});


var server = app.listen(3000, function(){
  var host = server.address().address;
  var port = server.address().port;
  console.log("Listening at http://%s:%s", host, port);
});

