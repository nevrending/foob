const soundsElement = document.querySelector('#sound-buttons');
(async () => {
    const sounds = await loadSounds();
    addSoundsToPage(sounds)
})();

/**
 *  @returns {Object}
*/
async function loadSounds() {
    const response = await fetch("assets/etc/sounds.json")
    const json = await response.json()
    return json;
}

/**
 *  @param {Object} sounds - JSON-type list of fbk noises.
 *  @param {string} sounds.title - FBK noise title.
 *  @param {string} sounds.src - FBK noise URL.
 */
function addSoundsToPage(sounds) {
    sounds.forEach(sound => {
        const soundButton = document.createElement("button")
        soundButton.className = "col btn btn-info sound-button"
        soundButton.textContent = sound.title;
        soundsElement.appendChild(soundButton) //the button is now the first and the last element in the list

        const player = document.createElement("audio")
        soundButton.appendChild(player)  //audio inside button.

        player.setAttribute("src", `assets/aud/fbk/noises/${sound.src}`)
        soundButton.addEventListener('click', () => {
            player.play();
        });
    });
}
function stopAudio() {
	$("audio").each(function() {
		this.pause()
		this.currentTime = 0;
	})
}
