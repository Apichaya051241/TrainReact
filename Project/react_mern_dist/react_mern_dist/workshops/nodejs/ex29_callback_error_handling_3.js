
var devide = (a, b, result, error) => {    
    if (b == 0) {
        error("b cannot be zero")
    }else{
        result(a/b)
    }
}

devide(3,2, result=>{
    console.log(result);
}, error=>{
    console.log(error);    
});


devide(3,0, result=>{
    console.log(result);
}, error=>{
    console.log(error);    
});

