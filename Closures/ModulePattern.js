// What is a Module Pattern

var Module = (function(){
    // private function and private variables are not accessible outside this module
    //this is a private funciton
    function privateMethod(){
    
        console.log("private")
    }

    //this is a public funciton and we are returning public function to the user so thet user can use it
    return {
        publicMethod : function(){
            // can call private method or private variables of this module 
            console.log("public")
        }
    }
})();

Module.publicMethod(); // public

Module.privateMethod(); // error