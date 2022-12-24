/* Crie uma lista com os seguintes alunos e alunas:
        'Jão', 'Juliana', 'Caio', 'Ana'
    
    Crie uma lista com as seguintes médias:
        10, 8, 7.5, 9
        
    Crie uma lista que contém as duas listas acima.*/

const alunos = ['Jão', 'Juliana', 'Caio', 'Ana'];
const medias = [10, 8, 7.5, 9];

const listaDeAlunosEMedias = [alunos, medias];

console.log(`A aluna da posição 1 da lista de alunos é: ${ listaDeAlunosEMedias[0][1] }.
             A nota dessa aluna é ${ listaDeAlunosEMedias[1][1] }.`);