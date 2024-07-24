let view = 0

function hello(){
    view = 7
    console.log("heyyyyyyyy " + view)
}

hello();
hello()
hello()
hello()
hello()

function hello(){
    let count = 0;
    return function (){
        if(count === 0){
            view = 7
            console.log("heyyyyyyyy " + view)
            count++;
        }else{
            console.log("already called")
        }
    }
    
}

let hey = hello();
hey();
hey();
hey();
hey();
hey();

