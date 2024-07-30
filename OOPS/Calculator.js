let Calculator = {
    
    sum : function(a,b){
        return a + b
    },
    sub : function(a,b){
        return a - b
    },
    mul : function(a,b){
        return a * b
    },
    div : function(a,b){
        return a / b
    },
}

console.log(Calculator.sum(4,6))
console.log(Calculator.mul(4,6))


let calc = {
    total : 0,
    add(a){
        this.total += a;
        return this // this statement will redirect us back to calc object so that we can continue with the next operation
    },
    sub(a){
        this.total -= a;
        return this
    },
    mul(a){
        this.total *= a;
        return this
    },
    div(a){
        this.total /= a;
        return this
    }
}

let result = calc.add(5).mul(2).div(1).sub(4)

console.log(result.total) //6
