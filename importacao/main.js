
const  {gets, print} = require ('./funcõesAuxiliaresGetsEprint');

/*uma sala contem 5 alunos e para cada aluno foi sorteado um numero de 1 - 100.
Faça um programa que receba os 5 numeros sorteados para os alunos e mostre o maior numero sorteado.
Dados de entrada:
5
50
10
95
28
Daos de saida:
98
*/

const numerosSorteados = [];

for (let i = 0; i < 5; i++) {
    const numeroSorteado = gets();
    numerosSorteados.push(numeroSorteado);
 
}

let numeroMaior=0;

for (let i = 0; i < numerosSorteados.length; i++) {
    const numeroSorteado = numerosSorteados[i];
    if(numeroSorteado > numeroMaior){
        numeroMaior = numeroSorteado;
    }
 
}

print(numeroMaior);






