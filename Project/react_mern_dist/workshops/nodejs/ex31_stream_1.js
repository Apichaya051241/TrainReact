//https://textmechanic.com/text-tools/numeration-tools/generate-list-numbers/
var fs = require("fs");
var data = '';

// Create a readable stream
var readerStream = fs.createReadStream('long_input.txt');

// Set the encoding to be utf8. 
readerStream.setEncoding('UTF8');

// Handle stream events --> data, end, and error
readerStream.on('data', function(chunk) {
   data += chunk;   
   if (data.length > 4000000){
     console.log(data)
    readerStream.destroy()  
   } 
});

readerStream.on('end',function() {
   console.log(data);
});

readerStream.on('error', function(err) {
   console.log(err.stack);
});

console.log("Program Ended");