var express = require('express');
var bodyParser = require('body-parser')
var app = express();

/*
// if incoming request is form data
app.use(bodyParser.urlencoded({
  extended: true
}));
*/

// if incoming request is json
app.use(bodyParser.json())

app.get('/', function(req, res){
  res.json({res: 'hello world'});
});

app.post('/add', function(req, res){
  var _title = req.body.title;
  var _subtitle = req.body.subtitle;
  res.json({status: 'added', title: _title, subtitle: _subtitle});
});

app.put('/update', function(req, res){
  var _title = req.body.title;
  var _subtitle = req.body.subtitle;
  res.json({status: 'updated', title: _title, subtitle: _subtitle});
});

app.delete('/del', function(req, res){
  var _title = req.body.title;
  var _subtitle = req.body.subtitle;
  res.json({status: 'deleted', title: _title, subtitle: _subtitle});
})

var server = app.listen(3000, function(){
  var host = server.address().address;
  var port = server.address().port;
  console.log("Listening at http://%s:%s", host, port);
});

