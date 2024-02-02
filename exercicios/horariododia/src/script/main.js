var hour = document.getElementById("hours");
var now = new Date();
hour.innerHTML = ` Agora são <strong>${now.getHours()}</strong> horas e <strong>${now.getMinutes()}</strong> minutos.`
var bg = document.getElementById("bg");
var image = document.getElementById("image");

if (now.getHours() >= 5 && now.getHours() < 12) {
    bg.classList.add("bg-morning");
    image.src = './src/assets/images/manha.jpg'
} else if (now.getHours() >= 12 && now.getHours() < 18) {
    bg.classList.add("bg-afternoon");
    image.src = "./src/assets/images/tarde.jpg"
} else {
    bg.classList.add("bg-night");
    image.src = "./src/assets/images/noite.jpg"
}
