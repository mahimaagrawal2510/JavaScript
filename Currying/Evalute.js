function evaluate(action){
    return function(a){
        return function(b){
            return action == "sum" ?  a + b : action == "multiply" ?  a * b : action == "sub" ?  a - b : a/b
        }
    }
}
console.log(evaluate("multiply")(4)(2))
console.log(evaluate("sum")(4)(2))
console.log(evaluate("sub")(4)(2))
console.log(evaluate("divide")(4)(2))