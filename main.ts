input.onPinPressed(TouchPin.P0, function () {
    basic.clearScreen()
})
input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . # . # .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
})
basic.showString("Hola mundo")
basic.showIcon(IconNames.Heart)
basic.showNumber(3)
basic.showNumber(2)
basic.showNumber(1)
music.playMelody("G F A G F A G F ", 120)
music.playMelody("A G A G F G F A ", 120)
music.playMelody("G F A F G A G F ", 120)
music.playMelody("F F G F F G G - ", 120)
if (input.buttonIsPressed(Button.A)) {
    music.playMelody("C5 C5 - - - - - - ", 120)
} else if (input.buttonIsPressed(Button.A)) {
    music.playMelody("C5 B A G A B C5 - ", 120)
} else {
    music.playMelody("E E - - - - - - ", 120)
}
input.setAccelerometerRange(AcceleratorRange.EightG)
basic.showLeds(`
    # . # . #
    . # . # .
    # . # . #
    . # . # .
    # . # . #
    `)
