// Sum(1)(2)...(n)

function Sum(a){
    return function(b){
        if(b) return Sum(a+b);
        else return a
    }

}

console.log(Sum(4)(5)(8)(2)()) //19
