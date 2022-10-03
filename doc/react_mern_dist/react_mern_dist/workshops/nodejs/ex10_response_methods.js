// https://webapplog.com/intro-to-express-js-parameters-error-handling-and-other-middleware/

var path = require('path');
var express = require('express');
var app = express();

app.get('/download', function(req, res){
  res.download(path.join(__dirname, 'download.jpeg')); // Prompt a file to be downloaded.
});

app.get('/send', function(req, res){
  res.send('send');
})

// https://stackoverflow.com/questions/20355136/must-res-end-be-called-in-express-with-node-js
app.get('/end', function(req, res){
  res.setHeader('content-type','text/plain')
  res.writeHead(res.statusCode);  
  res.write('Hi, ')
  res.write(' LEK');
  res.end(); // End the response process.
  //res.end(" 555"); // End the response process.
})

app.get('/json', function(req, res){
  res.json({result: 'ok'}); //Send a JSON response.
})

app.get('/redirect', function(req, res){
  res.redirect('/json'); // Redirect a request.
});


app.get('/sendFile', function(req, res){
  res.sendFile(path.join(__dirname,'/index.html'));
})

app.get('/send', function(req, res){

 // res.send(new Buffer('whoop'));
 // res.send({ some: 'json' });
 // res.send('<p>some html</p>');
  res.status(404).send('Sorry, we cannot find that!');
 // res.status(500).send({ error: 'something blew up' });  
});


var server = app.listen(3000, function(){
  var host = server.address().address;
  var port = server.address().port;
  console.log("Listening at http://%s:%s", host, port);
});

