enum RadioMessage {
    message1 = 49434
}
input.onButtonPressed(Button.A, function () {
    radio.setGroup(1)
    radio.sendString("How are you?")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    radio.setGroup(2)
})
radio.setGroup(1)
basic.forever(function () {
	
})
