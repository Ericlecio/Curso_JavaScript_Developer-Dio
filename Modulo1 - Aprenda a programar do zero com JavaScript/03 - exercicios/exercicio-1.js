/*
1) Faça um algoritimo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima a
 sua média e a sua classificação conforme a tabela abaixo.
Média = (nota 1 + nota 2 + nota 3) ) / 3;
Classificação:
  Média menor que 5, reprovação;
  Média entre 5 e 7, recuperação;
  Média acima de 7. passou de semestre;

-RESOLUÇÃO-
*/

var nota1 = 7;
var nota2 = 7;
var nota3 = 7;
var media = (nota1 + nota2 + nota3) / 3;

if (media < 5) {
    console.log('reprovado');
}
else if (media >= 5 && media <= 7) {
    console.log('recuperação');
}
else {
    console.log('aprovado')
}

