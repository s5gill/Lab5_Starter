// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  window.addEventListener('DOMContentLoaded', init);

  function init() {
    const faceImage = document.querySelector('#explore img');
    const textArea = document.getElementById('text-to-speak');
    const voiceSelect = document.getElementById('voice-select');
    const talkButton = document.querySelector('#explore button');

    let voices = [];

    function populateVoices() {
      voices = window.speechSynthesis.getVoices();

      voiceSelect.innerHTML = '<option value="select" disabled selected>Select Voice:</option>';

      voices.forEach((voice, index) => {
        const option = document.createElement('option');

        option.value = index;
        option.textContent = `${voice.name} (${voice.lang})`;

        voiceSelect.appendChild(option);
      });
    }

    populateVoices();

    if (window.speechSynthesis.onvoiceschanged !== undefined) {
      window.speechSynthesis.onvoiceschanged = populateVoices;
    }

    talkButton.addEventListener('click', () => {
      const text = textArea.value.trim();

      if (text === '' || voiceSelect.value === 'select') {
        return;
      }

      window.speechSynthesis.cancel();

      const utterance = new SpeechSynthesisUtterance(text);

      utterance.voice = voices[Number(voiceSelect.value)];

      utterance.onstart = () => {
        faceImage.src = 'assets/images/speaking.png';
        faceImage.alt = 'Speaking face';
      };

      utterance.onend = () => {
        faceImage.src = 'assets/images/smiling.png';
        faceImage.alt = 'Smiling face';
      };

      utterance.onerror = () => {
        faceImage.src = 'assets/images/smiling.png';
        faceImage.alt = 'Smiling face';
      };

      window.speechSynthesis.speak(utterance);
    });
  }
}