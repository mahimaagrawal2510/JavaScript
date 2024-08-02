console.log("first")
function importantAction(username, cb){
    setTimeout(()=>{
        cb("Hello " + username)
    }, 0)
}

function importantActionOther(lastname, cb){
    setTimeout(()=>{
        cb("Heyy " + lastname)
    }, 1000)
}

function importantActionOtherAnother(fullname, cb){
    setTimeout(()=>{
        cb("Finally " + fullname)
    }, 1000)
}

function importantAction1(username){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve("Hello " + username)
        }, 1000)
    })
   
}

function importantActionOther1(lastname){
   
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            reject("Heyy " + lastname)
        }, 1000)
    })
}

function importantActionOtherAnother1(fullname){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve("Finally " + fullname)
        }, 1000)
    })
    
}
importantAction1("Mahima").then((res) =>{
    console.log(res);
    importantActionOther1("Agrawal").then(res=>{
        console.log(res)
        importantActionOtherAnother1("MAhima Agrawal").then((res)=>{
            console.log(res)
        }).catch((err)=>{console.log(err)})
    }).catch((err)=>{console.log(err)})

}).catch((err)=>{console.log(err)})

//Promise chaining
importantAction1("Mahima").then((res) =>{
    console.log(res)
    return importantActionOther1("Agrawal")
}).then(res=>{
    console.log(res)
    return importantActionOtherAnother1("MAhima Agrawal")
}).then(res=>{
    console.log(res)
   
}).catch(err => {
    console.log(err)
}) 

//Promise combinator
Promise.all([
    importantAction1("Mahima"), importantActionOther1("Agrawal"), importantActionOtherAnother1("MAhima Agrawal")
]).then(res =>{
    console.log(res)
}).catch(err => {
    console.log(err)
}) // this will return all the promises at once in an array and if one fails all the other will fail


Promise.race([
    importantAction1("Mahima"), importantActionOther1("Agrawal"), importantActionOtherAnother1("MAhima Agrawal")
]).then(res =>{
    console.log(res)
}).catch(err => {
    console.log(err)
})  //this will return the first promise that fulfills or fails

Promise.allSettled([
    importantAction1("Mahima"), importantActionOther1("Agrawal"), importantActionOtherAnother1("MAhima Agrawal")
]).then(res =>{
    console.log(res)
}).catch(err => {
    console.log(err)
})  //returmns all the promises either they fails or succeeded 

Promise.any([
    importantAction1("Mahima"), importantActionOther1("Agrawal"), importantActionOtherAnother1("MAhima Agrawal")
]).then(res =>{
    console.log(res)
}).catch(err => {
    console.log(err)
}) // it only return the first fulfilled promise and ignore all the rejected ones and if all the 
//promises fails then only it return the error


console.log("last")