console.log('=====================================')
console.log('C O N D I Ç Õ E S   A N I N H A D A S')
console.log('=====================================')
var idade = 70;
if (idade < 16) {
    console.log('Não vota!')
} else if (idade < 18 || idade > 65) {
    console.log('Voto OPCIONAL!')
} else {
    console.log('Voto OBRIGATÓRIO!')
}

/** Erro de Sintaxe (Escrita) X Erro de Lógica (Programa retorna um resultado equivocado)*/
console.log('')
/*  Usando o operador ternário */
console.log('=================================')
console.log('O P E R A D O R   T E R N Á R I O')
console.log('=================================')
var idade = 19;
var resultado = idade < 16 ? 'não vota!': 
idade < 18 || idade > 65 ? 'seu voto é OPCIONAL' : 'seu voto é OBRIGATÓRIO!'
console.log(`Voce tem ${idade} anos e `+ resultado)

/* É plenamente possível, da mesma forma que existem IFs aninhados, aninhar condições no operador ternário */