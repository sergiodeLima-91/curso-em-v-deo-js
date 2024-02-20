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
var sexo = '';
var idade = '';

// Acionando o resultado pelo evento de clique po escuta:
button.addEventListener("click", function showResults(){
    results.classList.add("hide-results");
    image.classList.remove("image");
    description.innerHTML = `Sexo: ${sexDetection()} / Idade: ${ageCalculation()}`;
});

function sexDetection() {
    return sexo = document.querySelector('input[name="sexo"]:checked').value;
}

function ageCalculation() {
    return idade = currentYear - year.value;
}

// Validação dos dados:
var formYear = document.getElementById("form-year");
formYear.addEventListener("submit", function noSendForm(event) {
    // Verifica se o campo
    if (!formYear.checkValidity()) {
        alert("Por favor, preencha os campos obrigatórios!")
        event.preventDefault(); // Impede o envio do formulário
    }else{
        alert("Dados enviados!")
    }
});