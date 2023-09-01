/*Faça um programa que calcule e imprima o salário a ser transferido para um funcionário.
para realizar o calculo receba o valor bruto do salario e o adicional dos beneficios
o salario a ser transferido é calculado da seguinte maneira:

valor bruto do salario - percentual de imposto mediante a faixa salarial + adicional dos beneficios

para calcular o percentual de imposto segue as alíquotas:

De R$ 0.00 a R$ 1100.00 = 5.00%
De R$ 1100.01 a R$ 2500.00 = 10.00%
Maior que R$ 2500.00 = 15.00% */

const { gets, print } = require("./funcaoAuxiliar4");

const valorSalarioBruto = gets();
const valoradicionalBeneficios = gets();

function calcularPorcentagem(valor, percentual){
    return valor *(percentual / 100);
}

function PegarPercentualImpostoComBaseSalario(salario){
    if(salario >= 0 && salario <= 1100){
        return 5;
    }else if(salario >= 1100.01 && salario <= 2500){
        return 10;
    }else{
        return 15;
    }
}
const valorTransferir = valorSalarioBruto - (calcularPorcentagem(valorSalarioBruto, PegarPercentualImpostoComBaseSalario(valorSalarioBruto)))+ 
valoradicionalBeneficios;

print(valorTransferir);

