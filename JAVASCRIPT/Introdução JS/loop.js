for (let i = 0; i <= 4; i++){
      console.log(i);
}

//Exercicio

//Repita como um papagaio
function papagaio(texto) {
      for (let i = 1; i <= 5; i++){
            console.log(texto)
      }
}

//Contar ímpares
function naoPareDeContarImpares(numero) {
      let contador = 0;
      for (let i = 0; i < numero; i++){
            if (i % 2 == 0) {
                  contador++;
            }
      }
      return contador;
}
