var express = require('express');
var app = express();


/*
Route path: /users/:userId/books/:bookId
Request URL: http://localhost:3000/users/34/books/8989
req.params: { "userId": "34", "bookId": "8989" }
*/
app.get('/users/:userId/books/:bookId', function(req, res){
  console.log("users: " + req.params.userId);
  console.log("book: " + req.params.bookId);
  res.json({userId: req.params.userId, bookId: req.params.bookId});
});

/*
localhost:3000/flights/23-42
{
    "from": "23",
    "to": "42"
}
*/
app.get('/flights/:from-:to', function(req, res){
  res.json({from: req.params.from, to: req.params.to});
});


var server = app.listen(3000, function(){
  var host = server.address().address;
  var port = server.address().port;
  console.log("Listening at http://%s:%s", host, port);
});

