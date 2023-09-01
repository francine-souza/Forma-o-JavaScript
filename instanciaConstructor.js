class pessoa{
    nome;
    idade;

    constructor(nome, idade){
    this.nome = nome;
    this.idade = idade;
    }
    descrever(){
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`)
    }
}

const Francine = new pessoa("Francine", 36);
const Michel = new pessoa("michel", 35);
const Rennan = new pessoa("Rennan", 36);
const Ricardo = new pessoa("Ricardo",37);
const paulo = new pessoa("paulo", 36);
const Pericles = new pessoa("pericles", 36);
const jefferson = new pessoa("jefferson", 33);


Francine.descrever()
Michel.descrever()
Rennan.descrever()
Ricardo.descrever()
paulo.descrever()
Pericles.descrever()
jefferson.descrever()
