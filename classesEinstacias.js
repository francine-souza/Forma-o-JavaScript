 class pessoa{
    nome;
    idade;

    descrever(){
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);

    }
 }

 const Francine = new pessoa();
 Francine.nome = "Francine";
 Francine.idade = 36;

 const Michel = new pessoa();
 Michel.nome = "Michel";
 Michel.idade = 35;

 Francine.descrever();
 Michel.descrever();

 