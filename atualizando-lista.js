/* Crie uma lista de chamada com os seguintes alunos
    'João', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Leo' 
    
    Porém, a Ana e o Caio mudaram de escola e o Rodrigo entro nesta sala. Atualize a lista.*/

const nomes = ['João', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Leo'];

//Tirar a Ana e o Caio e coloca o Rogrigo no lugar
nomes.splice(1, 2, "Rodrigo.");

console.log(nomes);