// Controle de fluxo utilizando if
var idade = prompt("Qual a sua idade?");
if (idade >= 18) {
    console.log('Posso ir no show do Iron Maiden.')
} else if (idade >= 10) {
    console.log('Posso ir no show do Jonas Brothers.')
} else {
    console.log('Posso ir no show do Patati & Patatá.')
}

// Controle de fluxo utilizando Switch
var ingresso = prompt("Qual o tipo de ingresso?");

switch (ingresso) {
    case 'vip':
        console.log('Irei ficar no camarote.')
        break;
    case 'premium':
        console.log('Irei ficar na pista premium.')
        break;
    case 'comum':
        console.log('Irei ficar na arquibancada.')
        break;
    default:
        console.log('Tipo de ingresso inválido.')
        break;
}