const clumsyFunction = (num1, num2) => {
    for (let i = 0; i< 10000000; i++){}

    return num1 * num2;

}

console.time("6");
console.log(clumsyFunction(1,2)) ;
console.timeEnd("6");

// 2 52ms
console.time("8");
console.log(clumsyFunction(1,2)) ;
console.timeEnd("8");

// 2 54ms

//in case of optimising it, we need to cache the previous output




// updated code
function myMemoise(fn, context){
    const res = {};
    return function (...args){
        var argsCache = JSON.stringify(args);
        if(!res[argsCache]){
            res[argsCache] = fn.call(context || this,...args)
        }
        return res[argsCache]
    }
}

const clumsySquare = (num1, num2) => {
    for (let i = 0; i< 10000000; i++){}

    return num1 * num2;

}

const memoiseC = myMemoise(clumsySquare);
console.time("1");
console.log(memoiseC(1,2)); 
console.timeEnd("1");

console.time("3");
console.log(memoiseC(1,2)) ;
console.timeEnd("3");
