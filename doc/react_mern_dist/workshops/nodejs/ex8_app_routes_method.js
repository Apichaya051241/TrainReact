var express = require('express');
var app = express();

app.route('/login').get(function(req, res){
    res.json({result: "get was called"});
   }).post(function(req, res){
    res.json({result: "post was called"});
   }).put(function(req, res){
    res.json({result: "put was called"});
   }).delete(function(req, res){
    res.json({result: "delete was called"});
   });

var server = app.listen(3000, function(){
  var host = server.address().address;
  var port = server.address().port;
  console.log("Listening at http://%s:%s", host, port);
});

