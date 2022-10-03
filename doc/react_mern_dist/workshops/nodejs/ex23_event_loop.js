var string1 = new Buffer("codemobiles.com");
console.log(string1);
console.log(Buffer.isEncoding('utf8'))
console.log(Buffer.isEncoding('utf-8'))
console.log(Buffer.isEncoding('utf=8'))

var string2 = new Buffer(15);
string2.write("123456789", "utf8");

const offset = 9;
string2.write(" abcd", offset, "utf8");
console.log(string2.toString('utf8'))

var string3 = new Buffer(1000);
var count = 0
var cycle = 0
var watchID = setInterval(()=>{
   string3.write(String(count), cycle, 'utf-8')
   cycle++;
    if (count++ > 10){
        count = 0;
    }

   if (cycle > 100){
       clearInterval(watchID);
   } 
},100);

setInterval(()=>{
    console.log(string3.toString('utf-8'))

}, 1)