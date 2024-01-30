/* Funciona como o IF, mas com valores fixos. Para cada caso um caso. Deve ser usado OBRIGATORIAMENTE com o comando BREAK. O switch é muito últil em situações pontuais.*/

var agora = new Date();
var DiaDaSemana = agora.getDay();

/*

0 - Domingo
1 - Segunda
2 - Terça
3 - Quarta
4 - Quinta
5 - Sexta
6 - Sábado

*/

switch(DiaDaSemana) {
    case 0:
        console.log('Hoje é DOIMNGO!')
        break
    case 1:
        console.log('Hoje é SEGUNDA!')
        break
    case 2:
        console.log('Hoje é TERÇA!')
        break
    case 3:
        console.log('Hoje é QUARTA!')
        break
    case 4:
        console.log('Hoje é QUINTA')
        break
    case 5:
        console.log('Hoje é SEXTA!')
        break
    case 6:
        console.log('Hoje é SÁBADO!')
        break
    default:
        console.log('Número inválido! Digite um número entre 0 e 6!')
        break
}