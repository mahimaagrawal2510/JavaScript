// reduce method returns a single value i.e accumulator 

let array = [2, 6, 4, 8, 34, 85];

const val = array.reduce((acc, ele) => {
    return acc + ele
}, 7)

console.log(val)

// reduce polyfill
Array.prototype.myReduce = function(cb, accDefault){
    let value = accDefault;
    for(let i=0;i<this.length ; i++){
        value = value ? cb(value,this[i],i,this) : this[i];
    }
    return value;
}

let polyFillValue = array.myReduce((acc, ele) => {
    return acc + ele;
}, 9)

console.log(polyFillValue);

//remove duplicate elements 
const nums = [1, 2, 3, 5, 0, 4, 1, 8, 7];

const noDuplicateItems = nums.myReduce((acc, ele) => {
    if (!acc.includes(ele)) {
      acc.push(ele);
    }
    return acc;
  }, []);
  
console.log(noDuplicateItems); 