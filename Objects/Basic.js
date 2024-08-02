const user = {
    name : "Mahima Agrawal",
    designation : "Software developer"
}
//Delete a property from an object
delete user.designation
console.log(user)

const func = (function(a){
    console.log(a)
    delete a; //since delete is used to delete keys from objects, it is not going to affect this variable
    return a; //5
})(5)
console.log(func);

const property = "hello";
const name = "javascript";
const data = {
    [property] : name
}
console.log(data);

//loop in object
for(key in user){
    console.log(key)
    console.log(user[key])
}
const obj = {a:27, b:90, a:45}
console.log(obj) //updated value of a will be considered