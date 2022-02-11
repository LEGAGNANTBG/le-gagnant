let DonneeBLU = ""
led.enable(false)
serial.redirect(
SerialPin.P14,
SerialPin.P13,
BaudRate.BaudRate115200
)
basic.forever(function () {
    DonneeBLU = serial.readString()
    if (DonneeBLU == "1") {
        motorbit.forward(100)
    }
    if (DonneeBLU == "D") {
        motorbit.brake()
    }
})
