// Patter 1# - standard
function callback1(msg){
    console.log(msg);
}
setTimeout(callback1.bind(null, "Callback #1"), 2000);

// Patter 2# - arrow function
var callback2 = (msg)=>{
    console.log(msg);
}
setTimeout(callback2.bind(null,"Callback #2"), 2000);

// Patter 3# - lamda exp
setTimeout(()=>{ callback2("Callback #3") }, 2000)