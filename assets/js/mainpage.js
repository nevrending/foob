const yosettiImage = document.getElementById("#yosetti")
let imgI = 1

function rotateImage(direction) {
    imgI += direction
    if (imgI > 3) imgI = 1
    if (imgI < 1) imgI = 3
    yosettiImage.src = `pg${imgI}.png`
}