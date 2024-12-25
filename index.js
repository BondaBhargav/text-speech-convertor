let speech = new SpeechSynthesisUtterance();

let selectEle = document.querySelector("select");
let selectedVoice = selectEle.value;
let voices = [];

window.speechSynthesis.onvoiceschanged = () => {
voices =  window.speechSynthesis.getVoices();

  speech.voice = voices[0];
  voices.forEach(
    (voice, i) => (selectEle.options[i] = new Option(voice.name, i))
  );
};

selectEle.addEventListener("change", () => {
  speech.voice = voices[selectEle.value];
});

let textareaEle = document.querySelector("textarea");
let btnele = document.querySelector(".card-btn");
btnele.addEventListener("click", () => {
  speech.text = textareaEle.value;
  window.speechSynthesis.speak(speech);
});

console.log(selectEle);
