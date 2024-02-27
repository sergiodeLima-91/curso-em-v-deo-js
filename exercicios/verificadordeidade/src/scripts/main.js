// Seleção de Elementos via DOM:
var button = document.getElementById("button");
var results = document.getElementById("results");
var image = document.getElementById("img");
var year = document.getElementById("year");
var sexMasc = document.getElementById("masc");
var sexFem = document.getElementById("fem");
var description = document.getElementById("description");

// Calculo da Idade
var now = new Date();
var currentYear = now.getFullYear();

// Evento de clique:
button.addEventListener("click", function(event) {
        event.preventDefault(); // Impede o envio do formulário para recarregar a página
        results.classList.add("hide-results");
        image.classList.remove("hide-img");
        description.innerHTML = `Idade ${currentYear - year.value}`;

});