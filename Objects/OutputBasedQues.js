const a = {}

const b = {key : "b"}

const c = {key : "c"}

a[b] = 123;
a[c] = 456;

//since b is an object and cannot be stored as an object key so it will get stored as 

// a["[object Object]"] = 123  //for b
// a["[object Object]"] = 456  //for c


console.log(a)



//next ques

const shape = {
    radius : 10,
    diameter(){
        return this.radius*2
    },
    perimeter : ()=>2*Math.PI*this.radius
}

console.log(shape.diameter()) // 20
console.log(shape.perimeter()) //in case of arrow function, they refer to window object 
//but in case of normal function they refer to the local object