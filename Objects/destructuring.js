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

//output based ques
let person = {name : "Mahima"};
const members = [person];
person = null;
console.log(members) //[{name : "Mahima"}]  as we are not modifying the person properties
person.name = null;
console.log(members) //[{name : null}]  here we are modifying the person properties


//output based ques
const value = {num: 10};
const multiply = (x = {...value}) => {
    console.log(x.number *= 2)
}
multiply() //here we are storing value variable in x  //20
multiply() //here we are storing value variable in x  //20
multiply(value) //here we are passing actual value object so it will store the updated value in the actual object //20
multiply(value) //40

//output based ques
function changeAgeAndReference(person){
    person.age = 25;
    person = {
        name : "John",
        age : 50
    }
    return person
}
const personObj1 = {
    name : "Alex",
    age : 30
}
const personObj2 = changeAgeAndReference(personObj1)
console.log(personObj1) // {name : "Alex",age : 30}
console.log(personObj2) // {name : "John",age : 50}
