//map

let numeroPares = [2, 4, 6, 8, 10];
let numeroParesDobro = numeroPares.map(function (valor){
      return valor * 2;
})

console.log(numeroParesDobro);

//filter
let numerosFiltrados = numeroPares.filter(function (valor) {
      return valor < 6
})

console.log(numerosFiltrados)

//reduce
let somaPares = numeroPares(function (acum, valor) {
      return acum + valor
})
console.log(somaPares)

//forEach
numeroPares.forEach(function (valor, indice) {
      console.log("O indice" + indice + "tem o valor: " + valor)
})