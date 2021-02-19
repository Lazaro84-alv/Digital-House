//While

let contador = 0;

while (contador < 10) {
      console.log("Estou dentro de um while");
      contador++;
}

//do...while

let contador = 0;

do {
      console.log("Estou dentro de um while");
      contador++;
} while (contador < 10)

//Exercicios

//Contando com while
function count(inicio, fim) {
      let i = 1;
      while (inicio < fim) {
            console.log("O numero atual é__e é menor que__");
      }
}

//enconte o 5
function encontreUm5(numeros) {
      let i = 0;
      do {
            console.log(numeros[i]);
            i++;
      } while (numeros[i] != 5);
      console.log("Encontramos um 5!");
}

//criando a tabela de multiplicação
function tabelaDeMultiplicacao(numero) {
      let i = 1;

      while (i < 11) {
            console.log(numero + '*' + i + '=' + numero * i++)
      }
}
