// Objetos são uma espécie de super-variáveis que armazenam uma coleção de valores referenciados pelo nome;
// Exemplo de uso 1:
// var album = { //um objeto literal é composto por um par de chaves, e dentro desse par eu terei várias propriedades;
//     title: 'Black Album',
//     released: 1991,
//     showInfo: function() { //showInfo é uma propriedade e vai armazenar uma função e não um valor (ex. string, boolean, integer, etc.);
//         console.log(`Título do album: ${this.title}, lançado em: ${this.released}`)
//     } 
// }

// Exemplo de uso 2:
var album = new Object();

album.title = 'Black Album'
album.released = 1991
album.showInfo = function() {
    console.log(`Título do album: ${this.title}, lançado em: ${this.released}`)
}

album.showInfo();
console.log(album.title); //exibe no console apenas o title;
console.log(album.released); //exibe no console apenas o released;

album.tracks = ['Enter Sandman', 'The Unforgiven', 'Nothing Else Matters', 'The Struggle Within'] //tracks - é um arrays de strings
album.showTracks = function () {
    this.tracks.forEach(function(value, key){
    console.log(value)
    })
}
album.showTracks();