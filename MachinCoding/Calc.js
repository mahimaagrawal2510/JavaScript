// class calc {
//     constructor(){
//         this.result= 0
//     }
//     add(a){
//         this.result = this.result + a
//         return this
//     }
//     sub(a){
//         this.result = this.result - a
//         return this
//     }
//     mul(a){
//         this.result = this.result * a
//         return this
//     }
//     div(a){
//         this.result = this.result / a
//         return this
//     }
// }


// let calculator = new calc()
// const result = calculator.add(10).sub(3).mul(9).div(2)
// console.log(result)


function Calculator(){
    this.result = 0;
    this.add=function(a){
        this.result = this.result+a
        return this
    }
    this.sub=function(a){
        this.result = this.result-a
        return this
    }
}

let calc = new Calculator()
console.log(calc.add(10).sub(3).result)