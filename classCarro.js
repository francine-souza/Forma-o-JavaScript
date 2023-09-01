 /*Crie uma classe para representar carros.Os carros possuem uma marca, uma cor e um gasto medio de combustivel por kilomentro rodado.Crie
 um método que dado a quantidade de kilômetros e o preco do combustivel nos dê o valor gasto em reais para realizar esse percurso*/
 
 
 class Carro{
    marca;
    cor;
    gastoMedioPorKm;

    constructor(marca, cor, gastoMedioPorKm){
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;

      }
        calcularGastoPercurso(distanciaKm, precoCombustivel){
            return distanciaKm * this.gastoMedioPorKm * precoCombustivel;
        }

    }

    const celta = new Carro ("chevrolet","preto", 1/12);
    console.log(celta);

   console.log( celta.calcularGastoPercurso(30, 5));
   const hb20 = new Carro("hyundai", "prata", 1/12);
   console.log(hb20.calcularGastoPercurso(103,5.65));



    



    
 