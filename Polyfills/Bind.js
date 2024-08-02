let car = {
    name : "Ferrari",
    color : "Red"
}

function purchaseCar(currency, price){
    console.log(`I have purchased ${this.color} - ${this.name} car for ${currency} ${price}`);

}
let returnedFn = purchaseCar.bind(car);
returnedFn("Rs.", 5000000)

Function.prototype.myBind = function(context={}, ...args){
    if(typeof(this) !== "function") throw new Error(this + "It is not callable.");
    context.fn = this
    return function(...newArgs){
        return context.fn(...args, ...newArgs)
    } 
}

let returnedFn1 = purchaseCar.myBind(car);
returnedFn1("Rs.", 5000000)
let returnedFn2 = purchaseCar.myBind(car, "Rs.");
returnedFn2(5000000)