const obj = {
    a: 100, 
    b: 200,
    c: "heyyyyyy"
}

for(key in obj){
    if (typeof(obj[key]) === "number") obj[key] = obj[key]*2
}

console.log(obj)