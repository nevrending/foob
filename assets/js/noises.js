const soundsElement = document.querySelector('.sound-container');
(async () => {
  const sounds = await loadSounds();
  addSoundsToPage(sounds)
})();
async function loadSounds() {
  const response = await fetch("sounds.json")
  const json = await response.json() 
  return json;
}

function addSoundsToPage(sounds) {
  sounds.forEach(sound => {
    const soundButton = document.createElement("button") 
    soundButton.className = "btn btn-info btn-round sound-button"
    soundButton.textContent = sound.title;
    const player = document.createElement("audio") 
    soundsElement.appendChild(player) 
    player.setAttribute("src", `assets/audio/${sound.src}`)
    
    soundButton.addEventListener('click', () => {
      player.play();
    });
    soundsElement.appendChild(soundButton)
  });
}
