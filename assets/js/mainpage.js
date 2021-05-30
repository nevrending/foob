const yosettiImage = document.getElementById("yosetti")
let imgI = 1

function rotateImage() {
    ++imgI
    if (imgI > 3) imgI = 1
    yosettiImage.src = `assets/img/fbk/pg${imgI}.png`
}
setInterval(rotateImage(), 10000);