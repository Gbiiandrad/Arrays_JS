/* Divida os alunos da sala abaixo em duas listas com a mesma quantidade de alunos:
        'João', 'Juliana', 'Ana', 'Caio', 'Lara',
        'Marjorie', 'Guilherme', 'Aline', 'Fabiana',
        'André', 'Carlos', 'Paulo', 'Bia', 'Vivian',
        'Isabela', 'Vinícius', 'Renan', 'Renata',
        'Daisy', 'Camilo' */

const alunos = ['João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 
                'André', 'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinícius', 'Renan', 'Renata', 
                'Daisy', 'Camilo'];

// Fatiar ou dividir
const sala1 = alunos.slice(0, alunos.length / 2 );
const sala2 = alunos.slice(alunos.length / 2 );

console.log(`Sala 1: ${sala1}.`)
console.log(`Sala 2: ${sala2}.`);