let array = [2, 6, 41, 8, 34, 85];
let newArr = [];
array.forEach(ele => {
    newArr.push(ele*2)
})

console.log(newArr);


// forEach polyfill

Array.prototype.myForEach = function (cb){
    cb(this[i], i , this)
}
let polyfillNewArr = [];

array.forEach(ele => {
    polyfillNewArr.push(ele*2)
})
console.log(polyfillNewArr)

