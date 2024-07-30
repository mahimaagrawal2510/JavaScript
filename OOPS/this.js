var b = 10;
function hello(){
    var a = 8;
    console.log(this.a) //here 'this' will target its parent object //undefined
    console.log(this.b) //10
}

hello()

const hey = () => {
    var a = 8;
    console.log(this.a) //here 'this' will target its parent object //undefined
    console.log(this.b) //10
}
hey()

//in the above case arrow function and normal funciton will behave similarly
//in normal case, arrow function takes its this from its outer normal function 

let user = {
    name : "MAhima",
    age: 24,
    getDetails(){
        console.log(this.name, "name")
    },
    newDeets : {
        newNAme : "Munmun",
        updatedDetails(){
            console.log(this.name, "updated name", this.newNAme) // here this will point to its immediate parent
        }
    },
    arrowFunc : ()=>{
        console.log(this.name) //
    },
    getUpdatedDetails(){
        // name : "Munmun",
        const newArrowFunc = ()=>{
            console.log(this.name) //as this arrow function will takes it 'this' value from its parent function and in normal 
            //function this is coming from its parent object
        }
        newArrowFunc()
    }
}

user.getDetails()
user.newDeets.updatedDetails()
user.arrowFunc() //prints nothing as this arrow function will make 'this' point to window object as 'this' keyword value comes
// in arrow function from its parent function  
user.getUpdatedDetails()


//output based ques
const user1 = {
    name : "Mahima",
    getName(){
        const name = "Munmun";
        console.log(this.name)
    }
}
console.log(user1.getName()) // Mahima

//output based ques
class user2 {
    constructor (n){
        this.name = n
    }
    getName(){
        console.log(this.name, " hey")
    }
}
const uuser = new user2("Mahima Agrawal");
uuser.getName();

//output based ques
function makeUSer(){
    return {
        name :"John",
        ref : this, //pointing to the parent object, in this case 'window' object
        ref1(){
            return this
        }
    }
}
let us = makeUSer()
console.log(us.ref.name) // unfdefined
console.log(us.ref1().name) // John

//output based ques
const user4 = {
    name : "Mahima Agrawal",
    logMessage (){
        console.log(this.name)
    }
}
setTimeout(user4.logMessage, 1000) //undefined as after call stack has been cleared, gec will always point 'this' to window object
setTimeout(function(){user4.logMessage()}, 1000)


//output based ques
const user5 = {
    name : "Mahima Agrawal",
    greet (){
        console.log("Hello " , this.name)
    },
    farewell: ()=>{
        console.log("Bye " ,this.name)
    }
}
user5.greet() //  Hello Mahima Agrawal
user5.farewell() //Bye undefined

//output based ques
var length = 4;
function cb(){
    console.log(this.length, " length")
};
const obj = {
    length:5, 
    method(fn){
        
        fn()
    }
}
obj.method(cb) // 4 length as method will point to object as this but fun will  not target the object as it will 
//point to the window object

//output based ques
var length = 4;
function cb1(){
    console.log(this.length, " length")
};
const obj1 = {
    length:5, 
    method(){
        
        arguments[0]()
    }
}
obj1.method(cb1,2,3)