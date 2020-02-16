class Car {

    speed: number
    constructor() {
        this.speed = 10
    }
}

class Bmw extends Car {

}

//iife = module design pattern
let a = (function () {
    let i = 10
})()

let b = (function () {
    let i = 30
})()
