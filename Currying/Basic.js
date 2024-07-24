// convert func(a,b) to func(a)(b)

function func(a,b){
    console.log(a,b);
}

func(1,2)

function func1(a){
    return function(b){
        console.log(a,b)
    }
}

func1(1)(2)