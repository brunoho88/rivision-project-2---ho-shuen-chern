let rps = 0
input.onGesture(Gesture.Shake, function () {
    basic.showString("ONE DAY A BOY FELL DOWN A HOLE")
    basic.showIcon(IconNames.Asleep)
    basic.showIcon(IconNames.Happy)
    basic.showIcon(IconNames.Sad)
    music.playMelody("C5 A B G A F G E ", 165)
    rps = randint(1, 3)
    if (rps == 1) {
        basic.showIcon(IconNames.Square)
    } else if (rps == 2) {
        basic.showIcon(IconNames.SmallSquare)
    } else {
        basic.showIcon(IconNames.Scissors)
    }
    basic.showString("he battled many monsters")
    basic.showString("HE MADE IT OUT OF THE HOLE")
    basic.showString("THE END")
})
