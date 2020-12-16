function kieszonka () {
    punkty += 10
}
function PRZOD () {
    motor.MotorRun(motor.Motors.M1, motor.Dir.CW, punkty)
    motor.MotorRun(motor.Motors.M2, motor.Dir.CCW, 0 + punkty)
}
radio.onReceivedNumber(function (receivedNumber) {
    if (0 == receivedNumber) {
        STOP()
    } else if (1 == receivedNumber) {
        PRZOD()
    } else if (2 == receivedNumber) {
        kieszonka()
    } else if (3 == receivedNumber) {
        kieszonka2()
    }
})
input.onButtonPressed(Button.A, function () {
    ContinuousServo.spin_other_way(AnalogPin.P1)
})
function STOP () {
    motor.motorStopAll()
}
input.onButtonPressed(Button.AB, function () {
    ContinuousServo.turn_off_motor(DigitalPin.P2)
    ContinuousServo.turn_off_motor(DigitalPin.P1)
})
function kieszonka2 () {
    punkty = 0
}
input.onButtonPressed(Button.B, function () {
    ContinuousServo.spin_one_way_with_speed(AnalogPin.P12, 85)
})
let punkty = 0
servos.P1.setRange(0, 180)
basic.forever(function () {
    radio.setGroup(1)
})
