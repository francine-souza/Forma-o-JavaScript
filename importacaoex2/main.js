/*Faça um programa que recebe a media de aluno.
caso a nota seja <5 imprima "reprovado"
caso a media seja >5 e <7 imprima "recuperaçao"
caso a media seja >= 7 imprima "aprovado"*/

const {gets, print} = require('./funcaoAuxiliar2')

const media = gets();

if(media < 5 ){
    print("reprovado")
}else if (media > 5 && media < 7){
    print("recuperação")  

}else (media  >= 7){
    print("aprovado")
}
