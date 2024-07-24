function find(index){
    let a = [];
    for (let i= 0 ; i<1000000; i++){
        a[i] = i*i;
    }
    console.log(a[index])
}

console.time("6")
find(6)
console.timeEnd("6")
console.time("6")
find(12)
console.timeEnd("6")


//after optimisation using closures

function find(){
    let a = [];
    for (let i= 0 ; i<1000000; i++){
        a[i] = i*i;
    }
    return function(index){
        console.log(a[index])
    }
}

const closure = find();
console.time("6");
closure(6);
console.timeEnd("6");
console.time("50");
closure(50);
console.timeEnd("50");

//Explaination: we are running the loop in the first case every time we are running the code but in the second case when fing method is 
//called, it will preserve the array due to closures and our loop time will be saved every time.