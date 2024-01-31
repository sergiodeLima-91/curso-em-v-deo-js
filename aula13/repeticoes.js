/* Comando WHILE: Primeiro faz o TESTE LÓGICO e depois EXECUTA OU NÃO */
/* Comando DO WHILE:  Primeiro EXECUTA o comando para depois fazer o TESTE LÓGICO */

console.log('=====')
console.log('WHILE')
console.log('=====')
var contador = 1;
while (contador <= 6) {
    console.log(`Passo ${contador}`);
    contador++
}

console.log('=====')
console.log('DO WHILE')
console.log('=====')
var contador2 = 1;
do {
    console.log(`Passo ${contador2}`)
    contador2++
} while (contador2 <= 6)