var results = document.getElementById("results");
var button = document.getElementById("button");
var teste = document.getElementById("img");

button.addEventListener("click", function() {
    results.classList.add("hide-results");
    teste.classList.remove("image");
});