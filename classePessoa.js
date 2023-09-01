/* Crie uma classe para representar pessoas.
Para cada pessoa teremos o atributo nome, peso, altura.
As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso /(altura *altura));
instancie uma pessoa chamada José, que tenha 70 kg de peso e 1,75 de altura e peça ao josé para dizer o valor do sei IMC*/

class Pessoa{
    nome;
    peso;
    altura;

    constructor(nome, peso, altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    } 
calcularIMC(){
    return this.peso / (this.altura * this.altura);
}

classificarIMC(){
     const imc = this.calcularIMC();
      if(imc < 18.5){
        return("abaixo do peso");
      }else if (imc > 18.5 && imc < 25){
        return("peso normal");
      }else if(imc >=25 &&  imc < 30){
        return("acima do peso");
      }else if(imc >= 30 && imc < 40){
        return("obeso");
      }else{
        return("obesidade grave");
      }  

}

}

const jose = new Pessoa("jose",70, 1.75);
console.log(jose.calcularIMC());

const francine = new Pessoa("francine", 57, 1.46);
console.log(francine.classificarIMC());


