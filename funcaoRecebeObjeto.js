class Pessoa {
}

    function compararPessoas(p1, p2){
        if(p1.idade > p2.idade){
            console.log(`${p1.nome} é mais velho(a) que ${p2.nome}`);
        } else if (p2.idade > p1.idade){
            console.log(`${p2.nome} é mais velho(a) que ${p1.nome}`);
        }else{
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade`);
  
  }
}
const francine = new Pessoa("francine", 36);
const michel = new Pessoa("michel", 35);


 compararPessoas(francine, michel);
 