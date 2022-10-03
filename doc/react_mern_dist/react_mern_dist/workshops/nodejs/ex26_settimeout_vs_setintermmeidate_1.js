// timeout_vs_immediate.js
setTimeout(() => {
  console.log('Round: 1 - timeout');
}, 0);

setImmediate(() => {
  console.log('Round: 1 - immediate');
});


// timeout_vs_immediate.js
const fs = require('fs');

fs.readFile(__filename, () => {
  // call timeout
  setTimeout(() => {
    console.log('Round: 2 - timeout');
  }, 0);

  // call Immediate 
  setImmediate(() => {
    console.log('Round: 2 -immediate');
  });
});