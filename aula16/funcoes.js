/** Uso de funções em JS 
 * Elementos da Função:
 * 
 * > Chamada: ordem para que a função seja executada
 * > Parâmetro: aquilo que a função precisa para executar
 *  
*/

function parimpar(num) {
    if (num %2 == 0) {
        return 'PAR!'
    } else {
        return 'ÍMPAR!'
    };
};

console.log(parimpar(10));

/** Também é possível colocar uma função dentro de uma variável: */

let multiplicacao = function(n) {
    return n * 2
};

console.log(multiplicacao(5));


/**O velho exemplo do fatorial */
function fatorial(n) {
    let fat = 1;
    for (let contador = n; contador > 1; contador--) {
        fat *= contador;
    }

    return fat
}


let numero =  7;
let resultado = fatorial(numero);

let linha = "";
for (let contador2 = numero; contador2 > 1; contador2--) {
    linha += `${contador2} x `;
    if (contador2 == 2) {
        linha += '1'
    }
};
console.log(`${linha} = ${resultado}`);

/** Função Recursiva: quando a função chama ela mesma dentro dela */
/** Ver vídeo seguinte no minuto 21:50 para entender: (https://www.youtube.com/watch?v=mc3TKp2XzhI&t=1312s)*/

function fatorialrecursivo(num){
    if (num == 1){
        return 1
    } else {
        return num * fatorialrecursivo(num-1); /** Função chamando ela mesma! */
    }
}

console.log(`Chamando uma função dentro dela mesma: ${fatorialrecursivo(5)}`);