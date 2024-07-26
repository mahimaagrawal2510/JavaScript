const str = [..."javascript"] // ['j', 'a', 'v', 'a','s', 'c', 'r', 'i','p', 't']
console.log(str)

const user = {name : "Mahima", age: 21, designation: "Software Developer"};
const admin = {...user, admin:true, name:"fgyuds"}

console.log(admin);

//this will stringify only these two keys
const data = JSON.stringify(user, ["age", "designation"]) //'{"age":21,"designation":"Software Developer"}' 
console.log(data)