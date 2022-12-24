/* Um professor acidentalmente passou apenas 3 das 4 notas no sistema para um aluno:
    - 10, 6 e 8
    Para corrigir, adicione a nota 7 e faça o cálculo da média correta */

    const notas = [10, 6, 8];

    // colocar a nota ( essa nota ficará na posição 3°)
    notas.push(7);

    const media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;
    console.log("A média é:: " + media);