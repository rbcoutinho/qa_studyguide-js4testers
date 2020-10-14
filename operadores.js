// Os operadores vão nos permitir fazer operações, matermáticas, de comparação e lógicas;

// Aritméticos;
console.log(2+2); // 2+2 => 4
console.log(2-2); // 2-2 => 0
console.log(2*2); // 2*2 => 4
console.log(8/4); // 8/4 => 2

// Comparação;
console.log(2 == 2); // Exemplo true utilizando igual;
console.log(2 == 3); // Exemplo false utilizando igual;
console.log(3 != 3); // Exemplo false utilizando NÃO igual;
console.log(4 != 3); // Exemplo true utilizando NÃO igual;
console.log(2 == "2"); // Exemplo true utilizando inteiro e string, este resultado se deu pois os valores são iguais idenpendente do tipo;
console.log(2 === "2"); // Exemplo false utilizando igual estrito (retorna verdade se o valor e o tipo forem iguais);
console.log(3 !== "3"); // Exemplo true utilizando diferente estrito (retorna verdade se o valor e o tipo forem diferentes);
console.log("3" !== "3"); // Exemplo false utilizando diferente estrito (retorna verdade se o valor e o tipo forem diferentes, neste caso os valores são iguais e o tipo também);

// Maior que >
console.log(2>3); // Exemplo false pois 2 é menor que 3;
console.log(2>1); // Exemplo true pois 2 é maior que 1;

// Menor que <
console.log(2<3); // Exemplo true pois 2 é menor que 3;
console.log(2<1); // Exemplo false pois 2 é maior que 1;

// Maior igual >=
console.log(2>=3); // Exemplo false pois 2 é menor e não é igual a 3;
console.log(2>=2); // Exemplo true pois 2 é maior OU igual a 2 (neste caso, igual);
console.log(2>=1); // Exemplo true pois 2 é maior OU igual a 1 (neste caso, maior);

// Menor igual <=
console.log(2<=3); // Exemplo true pois 2 é menor OU igual a 3;
console.log(2<=2); // Exemplo true pois 2 é menor OU igual a 2 (neste caso, igual);
console.log(2<=1); // Exemplo false pois 2 é menor OU igual a 1 (neste caso, menor);