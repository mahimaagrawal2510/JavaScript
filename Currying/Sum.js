// Sum(2)(6)(1)

function Sum(a){
    return function(b){
        return function (c){
            console.log(a+b+c)
        }
    }
}

Sum(2)(6)(1);