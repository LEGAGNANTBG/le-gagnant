let DonneeBLU = 0
led.enable(false)
serial.redirect(
SerialPin.P14,
SerialPin.P13,
BaudRate.BaudRate115200
)
pins.servoWritePin(AnalogPin.P4, 0)
basic.forever(function () {
    DonneeBLU = 0
    if (DonneeBLU == 0) {
        pins.servoWritePin(AnalogPin.P4, 180)
    }
})
