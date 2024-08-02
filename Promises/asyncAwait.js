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

const result = async() =>{
    try{
        let m1 = await importantAction1("Mahima");
        let m2 = await importantActionOther1("Agrawal");
        let m3 = await importantActionOtherAnother1("Mahima Agrawal")
        console.log(m1, m2, m3)
    }catch(error){
        console.log(error)
    }
   
}
result()