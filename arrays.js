// Arrays - são coleções de dados que podemos usar para gravar dados simples, objetos, funções, ...
// ... atributos, no geral para gravar grandes informações;

// Modo 1 de uso:
//var avengers = new Array();
// Modo 2 de uso:
var avengers = ['Homem de Ferro', 'Capitão América', 'Thor']
console.log(avengers)

avengers.push('Hulk') //push me permite adicionar itens dentro do array;
console.log(avengers)

avengers.push('Homem Aranha')
// avengers.pop(); //pop remove o último registro do array;
// avengers.shift(); //shift remove o primeiro registro do array;
var indice = avengers.indexOf('Homem Aranha') //indexOf me permite receber o indice de um array;
console.log(indice)
avengers.splice(indice) //splice me permite remover pelo registro definido acima no indexOf;

avengers.push('Viúva Negra')
avengers.push('Gavião Arqueiro')
console.log(avengers)

var newAvengers = ['Homem Aranha', 'Capitã Marvel', 'Miss Marvel', 'Pantera Negra']

var result = avengers.concat(newAvengers) //concat permite fazer a concatenação dos arrays;
console.log(result)