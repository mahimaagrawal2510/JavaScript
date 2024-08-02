    //What is call? Call is a method of an object substituting another object for the current object
    
    const obj = {name : "Mahima"};
    function sayHello (){
        return "Hello " + this.name
    }
    console.log(sayHello()); // Hello 

    //now if we want sayHello's this to point to our object we can use call
    function sayHello1 (age){
        return "Hello " + this.name + "is " + age
    }
    console.log(sayHello1.call(obj, 24)); // Hello Mahima is 24

    //What is apply? Works same as a call method but it takes all of its arguments in an array.

    function sayHello1 (age, designation){
        return "Hello " + this.name + "is " + age + "and is " + designation
    }
    console.log(sayHello1.apply(obj, [24, "Software developer"])); // Hello Mahima is 24

    //What is bind ? Instead of calling a function directly, it provides us with another function which we can call later

    function sayHello1 (age, designation){
        return "Hello " + this.name + "is " + age + "and is " + designation
    }
    let bindFunc = sayHello1.bind(obj)
    console.log(bindFunc(24, "Software developer"));



    //output based ques
    const per = {name : "Mahima"}
    function sayHi(age){
        return `${this.name} is ${age}`;
    }
    console.log(sayHi.call(per, 24)) // Mahima is 24
    console.log(sayHi.bind(per, 24)) // returns function sayHi

//output based ques
const age = 10;
var person = {
    name : "Mahima",
    age : 20,
    getAge:function(){
        return this.age
    }
}
var person1 = {age: 24};
console.log(person.getAge.call(person1))  // 24 as here this in getAge will point to person1 object 
console.log(person.getAge.apply(person1)) //24
console.log(person.getAge.bind(person1)()) //24

//output based ques
var status = 1
setTimeout(()=>{
    const status = 0;
    const data = {
        status : 2,
        getStatus(){
            return this.status
        }
    };
    console.log(data.getStatus()); //2
    console.log(data.getStatus.call(this))  //1 as this never points to a function
},0)

//output based ques
const animals = [
    {species: "Lion", name : "King"},
    {species: "Whale", name : "Queen"}
];

function printAnimals(i){
    this.print = function(){
        console.log("#" + i + " " + this.species + ": " + this.name) //here this is pointing to global object
    }
    this.print();
}
//call printanimals in such a manner that it prints all animals in this array
for(let i =0;i<animals.length;i++ ){
    printAnimals.call(animals[i], i)
}

//output based ques
//concat using apply
let arr = [0, 1, 2];
let arr1 = ["a", "b", "c"];
console.log(arr.push.apply(arr, arr1)) //[0, 1, 2, "a", "b", "c"]

//output based ques
//find max
let arr2 = [0, 1, 2, 8, 4];
console.log(Math.max.apply(null, arr2))

//output based ques
//find min
let arr3 = [0, 1, 2, 8, 4];
console.log(Math.min.apply(null, arr3))

//output based ques
function f(){
    console.log(this)
}
let user = {
    g: f.bind(null) //return a function
}
user.g() // window object

//output based ques
function f1(){
    console.log(this.name)
}
f1 = f1.bind({name : "John"}).bind({name : "Doe"});
f1(); // John

//output based ques
function checkPassword(success, failed){
    let password = prompt("Password", "");
    if(password == "Mahima") success();
    else failed()
}
let user1 = {
    name : "Mahima Agrawal",
    loginSuccess(){
        console.log(this.name + " logged in")
    },
    loginFailed(){
        console.log(this.name + " logged in failed")
    }
}
checkPassword(user1.loginSuccess, user.loginFailed)
checkPassword(user1.loginSuccess.bind(user1), user.loginFailed.bind(user1))






