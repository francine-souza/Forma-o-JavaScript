//Elabore um algoritmo que calcule o que deve ser pago por um produto.Considerando o preco normal de etiqueta e a escolha de pagamento.
//Utilize os codigos da tabela a seguir para ler qual a condição de paganento escolhido e efetuar o calculo adequado.
//Codigo condição de pagamento:
// 1 = á vista débito, recebe 10% desconto;
// 2 = à vista no dinheiro ou pix, recebe 15% de desconto;
// 3 = Em duas vezes, preço normal de etiqueta sem juros;
// 4 = a cima de duas vezes, preço normal de etiqueta mais juros de 10%;

const precoEtiqueta = 100
const formaPagamento = 1

if(formaPagamento === 1){
console.log(precoEtiqueta - (precoEtiqueta * 0.1));
} else if(formaPagamento === 2){
    console.log(precoEtiqueta - (precoEtiqueta * 0.15));
}else if (formaPagamento === 3){
    console.log(precoEtiqueta);
} else {
    console.log(precoEtiqueta + (precoEtiqueta * 0.1));
}

