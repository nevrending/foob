const yosettiImage = document.getElementById("yosetti")
const bgVid = document.getElementById("bgvid")

let imgI = 1

function rotateImage() {
    ++imgI
    if (imgI > 3) imgI = 1
    yosettiImage.src = `assets/img/fbk/pg${imgI}.png`
}
window.onload = function() {
    setInterval(rotateImage, 5000);
};
