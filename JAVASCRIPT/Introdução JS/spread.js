//arrays

let frutas = ["maça", "banana", "uva"];

let frutasDois = ["laranja", "abacate", "goiaba"];

let listaCompleta = [...frutas, ...frutasDois];

console.log(listaCompleta);

//objeto

let pessoa = {
      nome: "ariene",
      idade: 35
}

let infoPessoal = {
      
      tel: "969793965",
      rg: 1742007407,
      ...pessoa
}
let pessoaCompleta = {
      endereco: "Ruas das Flores",
      ...infoPessoal
}

console.log(pessoaCompleta);

function letras(...paramns) {
      console.log(paramns)
}
letras("a", "b");

function somar(...numeros) {
      return numeros.reduce((pilha, num) => pilha += num);
}
somar(1, 6);
somar(78, 100, 175);
