/* 

Array (vetor ou variável composta) é uma variável com vários elementos compostos de chave (índice de identificação) e valor.  

*/

let numeros = [4,2,1,3,8,7,10,9];
console.log(`O vetor é ${numeros}`);

/* Inserindo valores na lista manualmente: */
numeros[4] = 6;
console.log(`Acréscimo manual: ${numeros}`);

/** inserindo valores por métodos: */
/**push: insere valor no final da lista */
numeros.push(5);
console.log(`Acrescimo via PUSH: ${numeros}`);

/** Como ordenar os valores do vetor em ordem crescente? Usando SORT() */
numeros.sort();
console.log(`Colocando números em ordem crescente com sort: ${numeros}`);

/** Verificando tamanho do array? */
var tamanho = numeros.length /** Por que length não tem parênteses em JS? Porque ele não é um atributo e sim UM MÉTODO! */
console.log('Conferindo tamanho do array: ' + tamanho);


/** Mostrando o vetor com maior formatação e mais inteligência: */
for (let posicao = 0; posicao < numeros.length; posicao++) {
    console.log(`A posição ${posicao} tem valor ${numeros[posicao]}`);
}

/** Simplificando mais ainda com o FOR IN: 
 * 
 * > Usado somente para vetores e objetos
 * > Lee-se: "para cada índice dentro (ou em, representado pelo "in") do vetor, faça"
*/
for (const posicao in numeros) {
    console.log(`FOR IN: O índice ${posicao} tem valor ${numeros[posicao]}`);
};

/** Buscando valores dentro do vetor com indexOf: */
console.log(`Buscando valores com indexOf: O valor ${numeros[numeros.indexOf(9)]}  está no índice ${numeros.indexOf(9)}`);
