enum RadioMessage {
    message1 = 49434
}
let A = false
let B = false
input.onButtonPressed(Button.A, function () {
    radio.setGroup(1)
    A = false
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    radio.setGroup(2)
    B = false
})
basic.forever(function () {
    if (A == false && input.buttonIsPressed(Button.A)) {
        radio.sendString("Left")
        A = true
        B = true
    }
    if (B == false && input.buttonIsPressed(Button.B)) {
        radio.sendString("Right")
        B = true
        A = true
    }
})
