export interface IRBlaster {
    signal(): void
}

export interface TempSensor {
    temp(): void
}

export class Device implements IRBlaster, TempSensor {
    private ir: IRBlaster // containment has a
    protected pwSp: string
    voltage: number

    temp() {

    }

    signal() {

    }

    powerOn() {

    }

    powerOff() {

    }

    power(st: number = 0) {

    }

    voltDiff(p1?: number, p2?: number) {

    }
}

export class Mobile extends Device { // is a

}

{
    let dv: Device = new Device()
    dv.powerOn()
    dv.powerOff()
    dv.power(1)
    dv.power()
    dv.voltDiff()
    dv.voltDiff(41, 56)

    let dt: Date = new Date()
    dt.getDate()

    let dv2: Device = new Mobile()
}