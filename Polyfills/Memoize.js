function memoize(cb){
    
    let res = {}
    return function(...args){
        if(res.hasOwnProperty(JSON.stringify(args))){
            return res[JSON.stringify(args)]
        }else{
            let cbRes = cb(...args)
            res[JSON.stringify(args)] = cbRes;
            return cbRes
        }

    }
}


function clumsySquare(num1, num2){
    for(let i=1; i<1000000000;i++){}
    return num1*num2
}
let memoised = memoize(clumsySquare)
console.time("start")
console.log(memoised(7,8))
console.timeEnd("start")
console.time("second")
console.log(memoised(7,8))
console.timeEnd("second")

