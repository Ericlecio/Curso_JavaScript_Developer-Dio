/*
3) Elabore um algoritmo que calcule O que deve ser pago por um produto, considerando O preço normal de etiqueta
e a escolha da condicão de pagamento.
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar O cálculo adequado.
Código Condição de pagamento:

 - A vista Débito, recebe 10% de desconto;
 - A vista no Dinheiro ou PIX, recebe 15% de desconto;
 - Em duas vezes, preço normal de etiqueta sem juros;
  Acima de duas vezes, preço normal de etiqueta mais juros de 10%;

-RESOLUÇÃO-
*/


const produto = 100;
const descontoDebito = (produto - (100 * 1) / produto * 10);
const descontoDinheiro = (produto - (100 * 1) / produto * 15);
const duasVezes = produto;
const AcimaDuasVezes = (produto + (100 * 1) / produto * 10);

const compra = AcimaDuasVezes;

if (compra == descontoDebito) {
    console.log('o valor do produto a vista no debito fica por: ' + 'R$' + descontoDebito + ',00')
}
else if (compra == descontoDinheiro) {
    console.log('o valor do produto a vista no dinheiro fica por: ' + 'R$' + descontoDinheiro + ',00')
}
else if (compra == duasVezes) {
    console.log('o valor do produto duas vezes fica por: ' + 'R$' + duasVezes + ',00')
}
else if (compra == AcimaDuasVezes) {
    console.log('o valor do produto a vista fica por:' + 'R$' + AcimaDuasVezes + ',00')
}

