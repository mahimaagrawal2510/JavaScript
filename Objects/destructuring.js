const user = {
    name : "Mahima",
    age : 24,
    fullName : {
        first : "MAhima",
        last : "Agrawal"
    }
}
const {name} = user
console.log(name)

//now if we want to change the key name
const {name : myName} = user 
console.log(myName)


//nested destructuring
const {fullName} = user
console.log(fullName)
const {fullName:{first}} = user
console.log(first)

//output based ques
function getItems(fruitList, favFruit, ...args){
    console.log([...fruitList, ...args, favFruit]);

}
getItems(["banana", "apple"], "pear", "orange") //["banana", "apple", "orange", "pear"]

//output based ques
let c = {greet : "hey"}
let d = c; //as we are not assigning the object, we are assigning the reference to that object

c.greet = "hello"
console.log(d.greet) //hello   

//output based ques
console.log({a:1} == {a:1}) //false
// console.log({a:1} === {a:1}) //This condition will always return 'false' since JavaScript compares objects by reference, not value

