music.setVolume(127)
basic.forever(function () {
    serial.writeLine("" + (sonar.ping(
    DigitalPin.P1,
    DigitalPin.P2,
    PingUnit.Centimeters
    )))
    basic.showNumber(sonar.ping(
    DigitalPin.P1,
    DigitalPin.P2,
    PingUnit.Centimeters
    ))
})
basic.forever(function () {
    music.playMelody("C D A F C5 E G C ", 120)
    music.playMelody("C D E F G A B C5 ", 120)
    music.playMelody("G F A A G D E C ", 120)
})
