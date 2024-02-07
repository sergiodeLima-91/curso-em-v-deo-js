var results = document.getElementById("results");
var button = document.getElementById("button");
var image = document.getElementById("img");
var description = document.getElementById("desc");
var year = document.getElementById("age-input");
// Convertendo tipo do input de string para número:
var year_num = Number(year.value);
// Criando variável para pegar ano atual pelo computador:
var now = new Date();
var currentYear = now.getFullYear();


// Acionando o resultado pelo evento de clique po escuta:
button.addEventListener("click", function() {
    results.classList.add("hide-results");
    image.classList.remove("image");
    description.innerHTML = `Idade ${currentYear - year.value}`;
});