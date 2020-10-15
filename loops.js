// Loops (Laços de repetição)

// For - é movido por declaração;
for (var a = 0; a < 10; a++) { //a++ é um incremento, pega o valor dele e acrescenta +1
    console.log(`Repetindo porque ${a} é menor que 10.`)
}

// While - é movido por condiçao, ele fica dentro do laço enquanto um valor/condição é verdadeira;
var i = 0;

while (i <= 10) {
    console.log(`Repetindo porque ${i} é menor ou igual a 10.`)
    i++;
}

// forEach - trabalha com arrays
var avengers = ['Ironman', 'Spiderman', 'Thor', 'Captain America', 'Black Panther', 'Black Widow']

avengers.forEach(function(value, key){
    console.log(`${value} na posição ${key}`)
})