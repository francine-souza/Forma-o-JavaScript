//Elabore um algoritmo que calcule o que deve ser pago por um produto.Considerando o preco normal de etiqueta e a escolha de pagamento.
//Utilize os codigos da tabela a seguir para ler qual a condição de paganento escolhido e efetuar o calculo adequado.
//Codigo condição de pagamento:
// 1 = á vista débito, recebe 10% desconto;
// 2 = à vista no dinheiro ou pix, recebe 15% de desconto;
// 3 = Em duas vezes, preço normal de etiqueta sem juros;
// 4 = a cima de duas vezes, preço normal de etiqueta mais juros de 10%;

function aplicarDesconto(valor, desconto){
    return (valor - (valor * (desconto/100)));
}

function aplicarJuros(valor, juros){
    return(valor + (valor * (juros / 100)));
}

const precoEtiqueta =100;
const formaPagamento = 4;

if(formaPagamento === 1){
    console.log(aplicarDesconto(precoEtiqueta,10));
}else if(formaPagamento===2){
    console.log(aplicarDesconto(precoEtiqueta,15));
}else if(formaPagamento===3){
    console.log(precoEtiqueta);
}else{
    console.log(aplicarJuros(precoEtiqueta,10));
}



