const express = require('express');
const app = express();
var workerpool = require('workerpool');
var pool = workerpool.pool();

function blockWork() {
  const end = Date.now() + 10000;
  while (Date.now() < end) {
    const doSomethingHeavyInJavaScript = 1 + 2 + 3;
  }}

app.get('/', (req, res) => res.send('Hello, World'));

app.get('/block', (req, res) => {
  pool.exec(blockWork, [])
    .then(function (result) {
      res.send('I am done!');
    })
    .catch(function (err) {
      console.error(err);
    })
    .then(function () {
      pool.terminate(); // terminate all workers when done
    });
});

app.listen(3000, () => console.log('app listening on port 3000'));