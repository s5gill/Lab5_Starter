window.addEventListener('DOMContentLoaded', init);

function init() {
  const hornSelect = document.getElementById('horn-select');
  const hornImage = document.querySelector('#expose > img');
  const volumeSlider = document.getElementById('volume');
  const volumeIcon = document.querySelector('#volume-controls img');
  const playButton = document.querySelector('#expose button');
  const audio = document.querySelector('#expose audio');

  const jsConfetti = window.JSConfetti ? new window.JSConfetti() : null;

  const hornData = {
    'air-horn': {
      image: 'assets/images/air-horn.svg',
      imageAlt: 'Air Horn',
      audio: 'assets/audio/air-horn.mp3'
    },
    'car-horn': {
      image: 'assets/images/car-horn.svg',
      imageAlt: 'Car Horn',
      audio: 'assets/audio/car-horn.mp3'
    },
    'party-horn': {
      image: 'assets/images/party-horn.svg',
      imageAlt: 'Party Horn',
      audio: 'assets/audio/party-horn.mp3'
    }
  };

  function updateVolume() {
    const sliderVolume = Number(volumeSlider.value);

    // The slider is 0-100, but HTMLAudioElement.volume must be 0.0-1.0.
    audio.volume = sliderVolume / 100;

    if (sliderVolume === 0) {
      volumeIcon.src = 'assets/icons/volume-level-0.svg';
      volumeIcon.alt = 'Volume level 0';
    } else if (sliderVolume < 33) {
      volumeIcon.src = 'assets/icons/volume-level-1.svg';
      volumeIcon.alt = 'Volume level 1';
    } else if (sliderVolume < 67) {
      volumeIcon.src = 'assets/icons/volume-level-2.svg';
      volumeIcon.alt = 'Volume level 2';
    } else {
      volumeIcon.src = 'assets/icons/volume-level-3.svg';
      volumeIcon.alt = 'Volume level 3';
    }
  }

  hornSelect.addEventListener('change', () => {
    const selectedHorn = hornData[hornSelect.value];

    if (!selectedHorn) {
      return;
    }

    hornImage.src = selectedHorn.image;
    hornImage.alt = selectedHorn.imageAlt;
    audio.src = selectedHorn.audio;
  });

  // Use input instead of change so the icon and volume update while dragging.
  volumeSlider.addEventListener('input', updateVolume);

  playButton.addEventListener('click', () => {
    if (!audio.src) {
      return;
    }

    audio.currentTime = 0;
    audio.play();

    if (hornSelect.value === 'party-horn' && jsConfetti) {
      jsConfetti.addConfetti();
    }
  });

  // Sync the audio volume and icon with the slider's default starting value.
  updateVolume();
}