var express = require('express');
var path = require('path');
var app = express();


app.set('view engine', 'ejs');
app.set('views', './AdminLTE-2.4.2')
app.use(express.static(path.join(__dirname, '/AdminLTE-2.4.2')))

app.get('/', (req, res)=>{
    res.render('test', {title: "codemobiles.com", subtitle: "angular"})
})


var server = app.listen(3000, function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log("Listening at http://%s:%s", host, port);
  });
  