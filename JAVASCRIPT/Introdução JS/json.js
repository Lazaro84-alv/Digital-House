let pessoa = {
      nome: "gabriel",
      idade: 36,
      altura: 1.81
}
//JSON.stringify()
let json = JSON.stringify(pessoa);

console.log(json);

//JSON.parse()
let objetoDeNovo = JSON.parse(json);

console.log(objetoDeNovo);

let listaCompras = ["pão", "presunto", "queijo"];
let json = JSON.stringify(listaCompras);
console.log(json);

let arrayDeNovo = JSON.parse(json);
console.log(arrayDeNovo);

