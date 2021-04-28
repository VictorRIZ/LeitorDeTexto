const utterance = new SpeechSynthesisUtterance();

utterance.lang = "pt-br";
utterance.rate = 1.5;

function speak() {
    speechSynthesis.speak(utterance);
}
function stop() {
    speechSynthesis.cancel();
}

function reset() {
    speechSynthesis.cancel();
    speechSynthesis.speak(utterance);
}

var onclick="speak()">Escutar
var onclick="stop()">Parar
var onclick="reset()"> Reniciar

function setText(event) {
    utterance.text = event.target.innerText;
}