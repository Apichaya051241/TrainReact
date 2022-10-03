  function callback(msg){
    console.log("run by ", msg)
  }

  setImmediate(callback.bind(null,"setImmediate()"))  // will be run immediately in next loop
  process.nextTick(callback.bind(null,"nextTick()")); // will be run in next phase (tick) - faster