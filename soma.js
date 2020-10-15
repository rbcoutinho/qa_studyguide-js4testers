// DOM (Document Object Model) - representa as marcações do html e elas são organizadas e lidas para o browser;

// html => Página
// body => Corpo da página
//     h1 = Cabeçalhos/Títulos
//     p  = Parágrafos
//     ul = Agrupadores de Listas 
//         li = Os itens de listas do elemento ul
//     a  = Link
//     form = Formulários
//     input = Inserção ou seleção de item
//         texto = Campos de texto
//         check = Checkbox
//         radio = Botões de radio
//     textarea = Parágrafos
//     button = Botões
//     span = Elements genéricos
//     tables = Tabelas
//         tds = Colunas das tabelas
//     divs = Divisões
//     labels = Textos

    //Acima estão alguns dos elementos que compõe o html, que monta o Document Object Model;
    //Todas essas tags que estão nos nossos arquivos html se transformam em elementos dentro da árvore ...
    //... do Document Object Model (DOM), considerando a renderização de cada navegador;
    //O DOM é composto por vários elementos html;

function somaValores() {
    var n1 = document.getElementById("numberOne").value;
    var n2 = document.getElementById("numberTwo").value;

    var result = parseInt(n1) + parseInt(n2); //parseInt faz a conversão de string para integer;
    var divResultado = document.getElementById("resultado"); //obtém a informação da div resultado;
    divResultado.append("O resultado da soma é: " + result) //exibe o resultado;
    console.log(result)
}