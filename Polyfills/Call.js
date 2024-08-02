let car = {
    name : "Ferrari",
    color : "Red"
}

function purchaseCar(currency, price){
    console.log(`I have purchased ${this.color} - ${this.name} car for ${currency} ${price}`);

}

Function.prototype.myCall = function(context={}, ...args){
    console.log(...args)
    if(typeof(this) !== "function") throw new Error(this + "It is not callable.")
    context.fn = this; //here this is purchasecar function
    context.fn(...args)
}
purchaseCar.call(car, "Rs.", 5000000);
purchaseCar.myCall(car, "Rs.", 5000000);

