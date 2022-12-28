/*Um professor acidentalmente adicionou nomes repetidos na lista de chamada:
Ana
Clara
Maria
Maria
João
João
João

Remova os nomes repetidos, deixando apenas um de cada.*/

const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];

const meuSet = new Set(nomes);

// Os (...)Pegar td o conteudo mais sem altera-los, ou seja, irá fazer uma copia da array original
const nomesAtualizados = [...meuSet];

console.log(nomesAtualizados);