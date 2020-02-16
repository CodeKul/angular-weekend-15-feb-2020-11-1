
// ES6 - https://github.com/DrkSephy/es6-cheatsheet
// typscript - https://github.com/rmolinamir/typescript-cheatsheet

let num: number = 10
let nm: string = 'android'
let isOk: boolean = true

let obj: object = {
    dt: {
        typ: 'asdlkkfjwskl;'
    }
}

let fn: () => void = function () {
    console.log(`Okay`)
}

fn = () => console.log(`Okay`) // lambda rep or arrow

let mx: number | (() => number) = () => 10
let an: any = true


function calGST(amt, per) {
    console.log(`
        Hisadvksl;kkv
        s;llvsd;lvbk
        sv,;sdlvbkvsdfl;fb
        svs;vfk ${10 * 89} ${an}
    `)
}

calGST(455, 10)

let arrow = (amt, per) => amt % per
arrow(56, 10)

console.log(arrow)