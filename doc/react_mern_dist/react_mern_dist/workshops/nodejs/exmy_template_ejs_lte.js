// https://webapplog.com/intro-to-express-js-parameters-error-handling-and-other-middleware/
var express = require('express');
var path = require('path');
var app = express();

app.set('view engine', 'ejs');
app.set('views', './AdminLTE-2.4.2')
app.use(express.static(path.join(__dirname, '/AdminLTE-2.4.2')))
app.get('/home', function (req, res) {
  res.render('main', {header: 'CodeMobiles.Com 666'})
});

var server = app.listen(3000, function(){
  var host = server.address().address;
  var port = server.address().port;
  console.log("Listening at http://%s:%s", host, port);
});
