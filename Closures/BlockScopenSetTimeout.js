function a(){
    for(var i=0;i<6;i++){
        setTimeout(function log(){
            console.log(i)
        }, i*1000)
    }
}
a();



// output is such as because var is pointing to the same variable reference as it has a function scope but in case of let(as it has block scope)
// i will be stored at new location and will refer ti the each updated value of i

//this will give the desired output

function ab(){
    for(let i=0;i<6;i++){
        setTimeout(function log(){
            console.log(i)
        }, i*1000)
    }
}
ab();

// now if we want to execute this using var we can use closures

for(var i=0;i<6;i++){
    function ainner(i){
        setTimeout(function log(){
            console.log(i)
        }, i*1000)
    }
    ainner(i)
}


