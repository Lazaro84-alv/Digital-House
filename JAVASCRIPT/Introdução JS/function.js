//modo declarativo

function somar(a,b) {
      //codigo
      console.log("Estou somando...")
      return a + b;
}

let resultadoSoma = somar(4,8);
console.log(resultadoSoma);

//modo expressão 
const multiplicar = function (a, b) {
      //codigo
      console.log("Estou multiplicando...")
      return a * b;
}

let resultadoMultiplicar = multiplicar(8,6);
console.log(resultadoMultiplicar);

//Exercicios
function saudacao(nome = 'visitante', sobrenome = 'anônimo') {
      return "Olá" + nome + ' ' + sobrenome;
      
}
saudacao();

//Declarar funções
function exemplo(){
      let texto = "Olá, sou uma função";
      return texto
}

//Declarando funções e variáveis
var exemplo = function(){
      exemplo = "Oi, eu sou uma função expressa";
      return exemplo;
}

//Funções com parâmetros
function saudar(nome, sobrenome) {
      return 'olá,' + nome + ' ' + sobrenome + '!';
}

//Numeros Pares
function ePar(numero){
      return numero % 2 === 0;
}

//Declarando três funções
function anterior(numero) {
      return numero - 1;
}
function triplo(numero) {
      return numero * 3;
}
function anteriorDoTriplo(numero){
      return anterior(triplo(numero));
}