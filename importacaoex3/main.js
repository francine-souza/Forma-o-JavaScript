/* faça um programa que receba n(quantidade de numeros) e seus respectivos valores.
Imprima o maior numero par e o menor numero par.*/

const { gets, print } = require('./funcaoAuxiliar3');

n = gets();
let maiorNumeroPar = 0;
let menorNumeroImpar = 0

for (let i = 0; i < n; i++) {
    const numero = gets();
    if (numero % 2 === 0) {
        if (numero > maiorNumeroPar) {
            maiorNumeroPar = numero;
        }


    } else {
        if (menorNumeroImpar === 0) {
            menorNumeroImpar = numero;
        } else if (numero < menorNumeroImpar) {
            menorNumeroImpar = numero;

        }
    }
}


print("Maior numero par é : " + maiorNumeroPar);
print("Menor numero impar  é : " + menorNumeroImpar);