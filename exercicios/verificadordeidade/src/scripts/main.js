// Seleção de Elementos via DOM:
var button = document.getElementById("button");
var results = document.getElementById("results");
var image = document.getElementById("img");

// Evento de clique:
button.addEventListener("click", function() {
    results.classList.add("hide-results");
    image.classList.remove("hide-img");
});