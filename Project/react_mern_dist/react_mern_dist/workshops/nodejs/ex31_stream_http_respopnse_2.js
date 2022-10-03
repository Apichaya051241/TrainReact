const app = require('express')();
// var server = require('http').Server(app);
const fs = require('fs');

app.get('/', (req, res)=>{
  const src = fs.createReadStream('./long_input.txt');
  src.pipe(res); // demo pipe
})

app.listen(3000, ()=>{
  console.log("server is running");
})