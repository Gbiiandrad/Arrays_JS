const nomes = ["Elvaldo", "Mari", "Camis"] ;

// Opção 1:
nomes.forEach(function (nome) {
    console.log(nome);
});

// Opção 2: É a mais usada no mercado
nomes.forEach( (nome) => {
    console.log(nome);
});

// Opção 3:
function imprimeNome(nome) {
    console.log(nome);
}

nomes.forEach(imprimeNome);
