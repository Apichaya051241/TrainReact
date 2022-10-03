process.env.UV_THREADPOOL_SIZE=64
//then execute some function that requires threadpool
require('fs').readFile('index.html',function(){});