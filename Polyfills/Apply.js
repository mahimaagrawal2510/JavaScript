let car = {
    name : "Ferrari",
    color : "Red"
}

function purchaseCar(currency, price){
    console.log(`I have purchased ${this.color} - ${this.name} car for ${currency} ${price}`);

}

Function.prototype.myApply = function(context={}, args=[]){
    if(typeof(this) !== "function") throw new Error("This is not a function");
    if(!Array.isArray(args)) throw new Error("Args is not array")
    console.log(...args);
    context.fn = this
    context.fn(...args)
}

purchaseCar.apply(car, ["Rs.", 5000000])
purchaseCar.myApply(car, ["Rs.", 5000000])