/* Condidere o seguinte array de notas: [7, 7, 8, 9]
Crie um novo array com a nota 10 a mais, sem alterar o array original */

const notas = [7, 7, 8, 9];

// Os (...)Pegar td o conteudo mais sem altera-los, ou seja, irá fazer uma copia da array original
const novasNotas = [...notas, 10];

//novasNotas.push(10); -------☝

console.log(`As novas notas são ${novasNotas}.`);
console.log(`As notas originais são ${notas}.`);

