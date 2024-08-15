const NOTE_DETAILS = [
  { note: "C", key: "Z", frequency: 261.626, active: false },
  { note: "Db", key: "S", frequency: 277.183, active: false },
  { note: "D", key: "X", frequency: 293.665, active: false },
  { note: "Eb", key: "D", frequency: 311.127, active: false },
  { note: "E", key: "C", frequency: 329.628, active: false },
  { note: "F", key: "V", frequency: 349.228, active: false },
  { note: "Gb", key: "G", frequency: 369.994, active: false },
  { note: "G", key: "B", frequency: 391.995, active: false },
  { note: "Ab", key: "H", frequency: 415.305, active: false },
  { note: "A", key: "N", frequency: 440, active: false },
  { note: "Bb", key: "J", frequency: 466.164, active: false },
  { note: "B", key: "M", frequency: 493.883, active: false },
];

const audioContext = new AudioContext();

// Step 1: Elements to target
const key_elements = document.querySelectorAll("[data-note]");

// Step 2: Trigger the target
// ~ keydown and keyup events only work with the document object
document.addEventListener("keydown", (e) => {
  if (e.repeat) return;
  const key = findKey(e.key);

  if (Boolean(key) === false) return;

  toggleNotesUI(key);
  startNote(key);
});

document.addEventListener("keyup", (e) => {
  const key = findKey(e.key);

  if (Boolean(key) === false) return;
  disableOssicilator(key);
  toggleNotesUI(key);
});

function findKey(keypressed) {
  const key = NOTE_DETAILS.find((note) => {
    return note.key === keypressed.toUpperCase();
  });

  return key;
}

function toggleNotesUI(key) {
  key_elements.forEach((element) => {
    if (element.dataset.note === key.note) {
      element.classList.toggle("active");
      updateNote(key);
    }
  });
}

function startNote(key) {
  const active_notes = NOTE_DETAILS.filter((note) => note.active === true);
  const gain = 1 / active_notes.length;

  const gain_node = audioContext.createGain(gain);
  gain_node.gain.value = gain;
  const oscillator = audioContext.createOscillator();
  oscillator.frequency.value = key.frequency;
  oscillator.type = "sine";
  oscillator.connect(gain_node).connect(audioContext.destination);
  oscillator.start();
  key.oscillator = oscillator;
}

function updateNote(key) {
  const note = NOTE_DETAILS.find((note) => note.key === key.key);
  note.active = !note.active;
}

function disableOssicilator(key) {
  if (key.oscillator != null) {
    key.oscillator.stop();
    key.oscillator.disconnect();
  }
}
