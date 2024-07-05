//Array.map(callback(currentElement, index, Array))

let array = [2, 6, 4, 8, 34, 85];

let newArr = array.map(ele => {
    return ele+5
})
console.log(newArr)


// map polyfill

Array.prototype.myMap = function (cb){
    let temp = [];
    //here 'this' points to the array on which we are iterating 
    for(let i = 0; i< this.length; i++){
        temp.push(cb(this[i],i,this))
    }
    return temp
}

let polyfillNewArr = array.myMap((ele)=>{
    return ele + 5
})

console.log(polyfillNewArr)