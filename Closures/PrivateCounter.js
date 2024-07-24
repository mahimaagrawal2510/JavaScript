function counter(){
    var counter = 0;
    this.incrementCounter = function(){
        counter++;
        console.log(counter);
    }
    this.decrementCounter = function(){
        counter--;
        console.log(counter);
    }
}

let count = new counter();
count.incrementCounter()


// other way

function counterWay(){
    var _counter = 0;
    function add(increment){
        _counter += increment;
    }
    function retrieve(){
        return "Counter " + _counter
    }
    return {add, retrieve}
}

let c = counterWay();
c.add(4);
c.add(12);

console.log(c.retrieve())