 const pessoa = {
    nome: "Francine",
    idade: 36,

    descrever: function(){
        console.log(`meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
 };

 pessoa.descrever= function(){
    console.log(`meu nome é ${this.nome}`);
 }

 pessoa.descrever()