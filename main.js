var welcome = "Hello JavaScript - JavaScript for Testers"
document.getElementById("welcome").append(welcome)
console.log(welcome)

// variável é um local na memória do computador onde você alocar valores ...
// valores que poderão ser alterados durante a execução do software ...
// por isso chamamos de variáveis;

var number = 10; // tipagem dinâmica, ou seja, atribui o tipo quando recebe o valor;
console.log(number)
console.log(typeof number); // typeof, que é responsável por trazer o tipo da variável;

var name = "Rafael";
console.log(name)
console.log(typeof name);

var n1 = 10;
var n2 = 20;
console.log(n1 + n2);

var n3 = "1" + 5; // irá concatenar pois o item entre aspas está sendo definido como uma sting e não como integer;
console.log(n3);