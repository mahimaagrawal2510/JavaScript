

let array = [2, 6, 41, 8, 34, 85];

let newArr = array.filter(ele => {
    return ele % 2 == 0
})

console.log(newArr);

// Filter polyfill
Array.prototype.myFilter = function(cb){
    let temp = [];
    for(let i=0; i<this.length; i++){
       if(cb(this[i], i,this)) temp.push(this[i])
    }
    return temp
}

let polyfillNewArr = array.myFilter(ele => {
    return ele %2 == 0;
})

console.log(polyfillNewArr);
