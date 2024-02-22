// Seleção de Elementos via DOM:
var button = document.getElementById("button");
var results = document.getElementById("results");
var image = document.getElementById("img");
var year = document.getElementById("year");
var sexMasc = document.getElementById("masc");
var sexFem = document.getElementById("fem");
var description = document.getElementById("description");

// Calculo da Idade
var yearNum = Number(year.value);
var now = new Date();
var currentYear = now.getFullYear();
var age = currentYear - yearNum;

// Evento de clique:
button.addEventListener("click", function(event) {

        event.preventDefault(); // Impede o envio do formulário para recarregar a página

        var yearValue = year.value.trim();
        var sexMaxValue = sexMasc.value.trim();
        var sexFemValue = sexFem.value.trim();

        
        if (yearValue !== '') {
            results.classList.add("hide-results");
            image.classList.remove("hide-img");
            description.innerHTML = `Idade: ${yearNum}`
            var yearNum = Number(yearValue);
            var now = new Date();
            var currentYear = now.getFullYear();
    
            var age = currentYear - yearNum;
            description.innerHTML = `Idade: ${age} anos`;
        } else {
            // results.classList.add("hide-results");
            results.innerHTML = "Por favor, preencha o ano de nascimento.";
        }
});