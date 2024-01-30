var agora = new Date();
var horas = agora.getHours();
var minutos = agora.getMinutes();

var saudacaoPorHorario = horas >  5 || horas < 12 ? `São exatamente ${horas}h:${minutos}m. Bom dia!`: horas > 12  || horas < 18 ? `São exatamente ${horas}h:${minutos}m. Boa tarde`: `São exatamente ${horas}h:${minutos}m. Boa noite!`
console.log(saudacaoPorHorario)