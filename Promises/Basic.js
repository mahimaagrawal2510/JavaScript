console.log("start");
const sub = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        const result = true
        if(!result) resolve("Promise resolved successfully")
        else reject("Promise not successfully resolved")    
    }, 1000)
})

sub.then((res)=>{
    console.log(res)
}).catch(error => {
    console.error(error);
})


//optimised
const sub1 = Promise.resolve("Promise resolved successfully")
sub1.then(res=>{
    console.log(res)
}).catch(error =>{
    console.log(first)
})
console.log("stop")