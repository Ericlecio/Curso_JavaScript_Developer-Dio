const { gets, print } = require('./funcoes-auxiliares-ex1.js');

/*
1 - Faça um programa  que receba a media de um aluno.
caso a media seja < 5 imprima 'reprovado'
caso a media seja >= 5 e < 7 imprima 'recuperação'.
caso a media seja >=7 imprima 'Aprovado.
*/

const media = gets();

if (media < 5) {
    print('reprovado')
} else if (media >= 5 && media < 7) {
    print('recuperação')
} else {
    print('Aprovado')
}



