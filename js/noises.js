const soundsElement = $('#sound-buttons');
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
        const soundButton = $(`<button class="col btn btn-info sound-button">${sound.title}</button>`)
        soundsElement.append(soundButton) //the button is now the first and the last element in the list
        const player = $(`<audio src="assets/aud/fbk/noises/${sound.src}">`)
		soundButton.append(player)  //audio inside button.
        soundButton.addEventListener('click', () => {
            player.play();
        });

    });
}
